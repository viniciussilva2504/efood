    import { useSelector, useDispatch } from 'react-redux'
    import { Link } from 'react-router-dom'
    import { 
    remove, 
    increaseQuantity, 
    decreaseQuantity,
    clear 
    } from '../../store/reducers/Cart'
    import type { RootReducer } from '../../store'
    import { formataPreco } from '../../utils/formatters'
    import Header from '../../components/Header'
    import Footer from '../../components/Footer'
    import {
    CartPageContainer,
    CartContent,
    CartItem,
    ItemImage,
    ItemInfo,
    ItemTitle,
    ItemPrice,
    QuantityControls,
    QuantityButton,
    Quantity,
    RemoveButton,
    EmptyCart,
    CartSummary,
    TotalPrice,
    CheckoutButton,
    BackToShopButton
    } from './styles'
    import lixeira from '../../assets/images/trash.png'

    const CartPage = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const removeItem = (id: number) => dispatch(remove(id))
    const increaseItemQuantity = (id: number) => dispatch(increaseQuantity(id))
    const decreaseItemQuantity = (id: number) => dispatch(decreaseQuantity(id))
    const clearCart = () => dispatch(clear())

    const getTotalPrice = () => {
        return items.reduce((acc, item) => {
        return acc + item.preco * (item.quantidade || 1)
        }, 0)
    }

    const getTotalItems = () => {
        return items.reduce((acc, item) => acc + (item.quantidade || 1), 0)
    }

    if (items.length === 0) {
        return (
        <>
            <Header />
            <CartPageContainer>
            <EmptyCart>
                <h2>Seu carrinho está vazio</h2>
                <p>Que tal adicionar alguns deliciosos pratos?</p>
                <Link to="/">
                <BackToShopButton>Voltar ao Cardápio</BackToShopButton>
                </Link>
            </EmptyCart>
            </CartPageContainer>
            <Footer />
        </>
        )
    }

    return (
        <>
        <Header />
        <CartPageContainer>
            <CartContent>
            <h2>Seu Carrinho ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'})</h2>
            
            <div>
                {items.map((item) => (
                <CartItem key={item.id}>
                    <ItemImage src={item.foto} alt={item.nome} />
                    <ItemInfo>
                    <ItemTitle>{item.nome}</ItemTitle>
                    <ItemPrice>{formataPreco(item.preco)}</ItemPrice>
                    <QuantityControls>
                        <QuantityButton onClick={() => decreaseItemQuantity(item.id)}>
                        -
                        </QuantityButton>
                        <Quantity>{item.quantidade || 1}</Quantity>
                        <QuantityButton onClick={() => increaseItemQuantity(item.id)}>
                        +
                        </QuantityButton>
                    </QuantityControls>
                    </ItemInfo>
                    <RemoveButton onClick={() => removeItem(item.id)}>
                    <img src={lixeira} alt="Remover item" />
                    </RemoveButton>
                </CartItem>
                ))}
            </div>

            <CartSummary>
                <TotalPrice>
                <span>Valor total:</span>
                <span>{formataPreco(getTotalPrice())}</span>
                </TotalPrice>
                
                <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <button onClick={clearCart} style={{ 
                    background: 'transparent', 
                    border: '1px solid #e66767', 
                    color: '#e66767', 
                    padding: '8px 16px',
                    cursor: 'pointer'
                }}>
                    Limpar Carrinho
                </button>
                
                <CheckoutButton>
                    Finalizar Pedido
                </CheckoutButton>
                </div>
                
                <Link to="/" style={{ marginTop: '16px', display: 'inline-block' }}>
                <BackToShopButton>Continuar Comprando</BackToShopButton>
                </Link>
            </CartSummary>
            </CartContent>
        </CartPageContainer>
        <Footer />
        </>
    )
    }

    export default CartPage