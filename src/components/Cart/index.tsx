import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Overlay,
  BotaoCart,
  CartContainer,
  Quantity,
  SideBar,
  Prices,
  Title,
  Lixeira,
  CartItem,
  QuantityControls,
  QuantityButton
} from './styles'

import Checkout from '../Checkout'
import type { RootReducer } from '../../store'
import lixeira from '../../assets/images/trash.png'
import { 
  close, 
  openOrder, 
  remove, 
  increaseQuantity, 
  decreaseQuantity 
} from '../../store/reducers/Cart'
import { formataPreco } from '../../utils/formatters'
import { useToast } from '../Toast'

const Cart = () => {
  const { isOpen, items, isOrder } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const { showToast } = useToast()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => dispatch(remove(id))
  const increaseItemQuantity = (id: number) => dispatch(increaseQuantity(id))
  const decreaseItemQuantity = (id: number) => dispatch(decreaseQuantity(id))

  const abrirPedido = () => {
    if (items.length > 0) {
      dispatch(openOrder())
    } else {
      closeCart()
      showToast('Seu carrinho está vazio', 'error')
    }
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return acc + item.preco * (item.quantidade || 1)
    }, 0)
  }

  if (isOrder) {
    return <Checkout />
  }

  if (!isOpen) {
    return null
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img className="product-image" src={item.foto} alt={item.nome} />
              <div>
                <Title>{item.nome}</Title>
                <span>{formataPreco(item.preco)}</span>
                <QuantityControls>
                  <QuantityButton onClick={() => decreaseItemQuantity(item.id)}>
                    -
                  </QuantityButton>
                  <Quantity>{item.quantidade || 1}</Quantity>
                  <QuantityButton onClick={() => increaseItemQuantity(item.id)}>
                    +
                  </QuantityButton>
                </QuantityControls>
              </div>
              <button type="button" onClick={() => removeItem(item.id)}>
                <Lixeira src={lixeira} alt="Remover item do carrinho" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total:</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <BotaoCart onClick={abrirPedido}>Continuar com a entrega</BotaoCart>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
