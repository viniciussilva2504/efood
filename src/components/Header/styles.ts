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
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

export const TextHeader = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${cores.rosa};
  margin-top: 138px;
  max-width: 550px;
  text-align: center;
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

  &:hover {
    opacity: 0.8;
  }
`
