import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderContent, Logo, Title, RestaurantHeader, RestaurantHeaderContent, RestaurantLogo, RestaurantNav, CartInfo } from './styles'

interface HeaderProps {
  isRestaurantPage?: boolean
}

const Header: React.FC<HeaderProps> = ({ isRestaurantPage = false }) => {
  if (isRestaurantPage) {
    return (
      <RestaurantHeader>
        <div className="container">
          <RestaurantHeaderContent>
            <RestaurantNav>
              <Link to="/">Restaurantes</Link>
            </RestaurantNav>
            <Link to="/">
              <RestaurantLogo src="/images/logo_efood.png" alt="efood" />
            </Link>
            <CartInfo>0 produto(s) no carrinho</CartInfo>
          </RestaurantHeaderContent>
        </div>
      </RestaurantHeader>
    )
  }

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo src="/images/logo_efood.png" alt="efood" />
          <Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Title>
        </HeaderContent>
      </div>
    </HeaderContainer>
  )
}

export default Header