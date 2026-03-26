import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.section`
  background-color: ${cores.bege};
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;

  @media (max-width: 900px) {
    max-width: 125px;
    padding-top: 32px;
  }

  @media (max-width: 600px) {
    max-width: 90px;
    padding-top: 16px;
  }
`

export const ListLogos = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 32px;

  #twitter {
    margin: 0 8px;
  }
`

export const TextFooter = styled.p`
  color: ${cores.rosa};
  font-size: 10px;
  width: 480px;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;

  @media (max-width: 900px) {
    width: 90%;
    max-width: 320px;
    padding-top: 40px;
    padding-bottom: 24px;
  }

  @media (max-width: 600px) {
    font-size: 9px;
    padding-top: 16px;
    padding-bottom: 8px;
  }
`
