import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #FFEBD9;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(230, 103, 103, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  min-height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const HeaderContent = styled.div`
  text-align: center;
  color: #E66767;
`

export const Logo = styled.img`
  margin-bottom: 138px;
  width: 125px;
  height: auto;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  max-width: 540px;
  margin: 0 auto;
  color: #E66767;
  text-align: center;
`

export const RestaurantHeader = styled.header`
  background-color: #FFEBD9;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(230, 103, 103, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  padding: 40px 0;
`

export const RestaurantHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RestaurantLogo = styled.img`
  width: 125px;
  height: auto;
`

export const RestaurantNav = styled.div`
  a {
    color: #E66767;
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const CartInfo = styled.span`
  color: #E66767;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`