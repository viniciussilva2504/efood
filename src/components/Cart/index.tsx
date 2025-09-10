import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import CheckoutForm from '../CheckoutForm'
import {
  CartSidebar,
  CartOverlay,
  CartHeader,
  CartTitle,
  CloseButton,
  CartContent,
  CartEmpty,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  RemoveButton,
  CartFooter,
  TotalPrice,
  CheckoutButton
} from './styles'

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, toggleCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  if (!state.isOpen) return null

  return (
    <>
      <CartOverlay onClick={toggleCart} />
      <CartSidebar>
        {showCheckout ? (
          <CheckoutForm onBack={handleBackToCart} />
        ) : (
          <>
            <CartHeader>
              <CartTitle>Carrinho ({state.items.length} {state.items.length === 1 ? 'item' : 'itens'})</CartTitle>
              <CloseButton onClick={toggleCart}>×</CloseButton>
            </CartHeader>
            
            <CartContent>
              {state.items.length === 0 ? (
                <CartEmpty>Seu carrinho está vazio</CartEmpty>
              ) : (
                state.items.map(item => (
                  <CartItem key={item.id}>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>{formatPrice(item.price)}</ItemPrice>
                      <ItemQuantity>
                        <QuantityButton 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </QuantityButton>
                        <span>{item.quantity}</span>
                        <QuantityButton 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </QuantityButton>
                      </ItemQuantity>
                      <RemoveButton onClick={() => removeItem(item.id)}>
                        🗑️ Remover
                      </RemoveButton>
                    </ItemInfo>
                  </CartItem>
                ))
              )}
            </CartContent>
            
            {state.items.length > 0 && (
              <CartFooter>
                <TotalPrice>Valor total: {formatPrice(state.total)}</TotalPrice>
                <CheckoutButton onClick={handleCheckout}>
                  Continuar com a entrega
                </CheckoutButton>
              </CartFooter>
            )}
          </>
        )}
      </CartSidebar>
    </>
  )
}

export default Cart
