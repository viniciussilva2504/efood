import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

import {
  Imagem,
  Text,
  Banner,
  TextBanner,
  RestaurantName,
  Cart,
  LogoLink
} from './styles'
import { Container } from '../../styles'
import { Link, useParams } from 'react-router-dom'
import { open } from '../../store/reducers/Cart'
import { useGetRestauranteQuery } from '../../services/api'
import type { RootReducer } from '../../store/index'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

export default function HeaderPerfil({ tipo, titulo, capa }: Props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const abreCart = () => dispatch(open())
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
        <Text>Restaurantes</Text>
        <LogoLink>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
        </LogoLink>
        <Cart onClick={abreCart}>{items.length} produto(s) no carrinho</Cart>
      </Imagem>
      <Banner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${capa})`
        }}
      >
        <Container>
          <TextBanner>{tipo}</TextBanner>
          <RestaurantName>{titulo}</RestaurantName>
        </Container>
      </Banner>
    </>
  )
}
