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
    import { useToast } from '../../components/Toast'

    const CartPage = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const { showToast } = useToast()

    const removeItem = (id: number) => {
        dispatch(remove(id))
        showToast('Item removed from cart', 'success')
    }
    const increaseItemQuantity = (id: number) => dispatch(increaseQuantity(id))
    const decreaseItemQuantity = (id: number) => dispatch(decreaseQuantity(id))
    const clearCart = () => {
        dispatch(clear())
        showToast('Cart cleared', 'success')
    }

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
                <h2>Your cart is empty</h2>
                <p>How about adding some delicious dishes?</p>
                <Link to="/">
                <BackToShopButton>Back to Menu</BackToShopButton>
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
            <h2>Your Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})</h2>
            
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
                    <img src={lixeira} alt="Remove item" />
                    </RemoveButton>
                </CartItem>
                ))}
            </div>

            <CartSummary>
                <TotalPrice>
                <span>Total:</span>
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
                    Clear Cart
                </button>
                
                <CheckoutButton>
                    Checkout
                </CheckoutButton>
                </div>
                
                <Link to="/" style={{ marginTop: '16px', display: 'inline-block' }}>
                <BackToShopButton>Continue Shopping</BackToShopButton>
                </Link>
            </CartSummary>
            </CartContent>
        </CartPageContainer>
        <Footer />
        </>
    )
    }

    export default CartPage