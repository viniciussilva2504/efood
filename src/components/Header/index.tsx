  import React from 'react'
  import { useState } from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { Imagem, Logo, TextHeader, CartLink } from './styles'
  import { open } from '../../store/reducers/Cart'
  import type { RootReducer } from '../../store'
  import { useAuth } from '../../contexts/AuthContext'
  import AuthModal from '../AuthModal'

  type HeaderProps = {
    isRestaurantPage?: boolean
  }

  const Header = ({ isRestaurantPage }: HeaderProps) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const { user, signOut } = useAuth()
    const [showAuth, setShowAuth] = useState(false)
    
    const getTotalItems = () => {
      return items.reduce((acc, item) => acc + (item.quantidade || 1), 0)
    }

    const openCart = () => {
      dispatch(open())
    }

    return (
      <Imagem style={{ backgroundImage: `url(/images/fundo.png)` }}>
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '32px',
            zIndex: 10,
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
          className="cart-mobile"
        >
          {user ? (
            <>
              <CartLink style={{ fontSize: '12px' }}>
                Hello, {user.user_metadata?.name || user.email?.split('@')[0]}
              </CartLink>
              <CartLink onClick={() => signOut()}>Sign out</CartLink>
            </>
          ) : (
            <CartLink onClick={() => setShowAuth(true)}>Sign in</CartLink>
          )}
          <CartLink onClick={openCart}>
            <span className="cart-full">Cart ({getTotalItems()})</span>
            <span className="cart-short">Cart ({getTotalItems()})</span>
          </CartLink>
        </div>
        <Logo src="/images/logo.svg" alt="efood" />
        <TextHeader>
          Live gastronomic experiences from the comfort of your home
        </TextHeader>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </Imagem>
    )
  }

  export default Header
