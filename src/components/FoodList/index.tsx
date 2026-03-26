import React from 'react'
import type { CardapioItem } from '../../pages/Home'
import Food from '../Food'
import { List } from './styles'
import { Container } from '../../styles'

type Props = {
  cardapio: CardapioItem[]
}

export default function FoodList({ cardapio }: Props) {
  return (
    <Container>
      <List>
        {cardapio.map((item) => (
          <Food
            key={item.id}
            foto={item.foto}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            porcao={item.porcao}
            id={item.id}
          />
        ))}
      </List>
    </Container>
  )
}
