import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  padding: 0 16px;

  @media (max-width: 900px) {
    height: 260px;
    margin-bottom: 32px;
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    height: 180px;
    margin-bottom: 16px;
    padding: 0 4px;

    .cart-mobile {
      flex-direction: column !important;
      align-items: stretch !important;
      width: auto;
    }
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`

export const TextHeader = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${cores.rosa};
  margin-top: 92px;
  max-width: 550px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 24px;
    margin-top: 60px;
    max-width: 320px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 32px;
    max-width: 90vw;
    line-height: 120%;
  }
`

export const CartLink = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s;
  text-align: center;

  .cart-short {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 100%;

    .cart-full {
      display: none;
    }

    .cart-short {
      display: inline;
    }
  }
`
