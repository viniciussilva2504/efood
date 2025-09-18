import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (max-width: 1040px) {
    padding: 0 16px;
  }
`

export const BannerContainer = styled.div`
  position: relative;
  height: 280px;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

export const BannerInfo = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
`

export const RestaurantType = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin: 0 0 156px 0;
  opacity: 0.5;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
`

export const MenuContainer = styled.section`
  padding: 80px 0;
  background-color: #fff8f2;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
