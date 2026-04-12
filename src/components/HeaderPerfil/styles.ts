import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  position: relative;

  @media (max-width: 900px) {
    height: 120px;
    padding: 0 16px;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 80px;
    flex-direction: column;
    padding: 12px 8px;
    gap: 4px;
  }
`

export const Text = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  position: absolute;
  left: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    left: 16px;
  }

  @media (max-width: 600px) {
    position: static;
    order: 2;
    font-size: 14px;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  color: ${cores.branco};
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    height: 160px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }
`

export const TextBanner = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  padding-bottom: 152px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 16px;
    padding-bottom: 80px;
  }
`

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  width: 672px;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    max-width: calc(100% - 32px);
  }
`
export const Cart = styled.h3`
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;
  color: ${cores.rosa};
  position: absolute;
  right: 32px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    right: 16px;
  }

  @media (max-width: 600px) {
    position: static;
    order: 3;
    font-size: 14px;
  }
`

export const LogoLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 120px;
    }
  }

  @media (max-width: 600px) {
    order: 1;
  }
`
