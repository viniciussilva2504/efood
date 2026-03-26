import { render, screen, fireEvent } from '@testing-library/react'
import Food from './index'

describe('Food component', () => {
  it('renders food info and opens modal', () => {
    render(
      <Food
        foto="/pizza.jpg"
        nome="Pizza"
        descricao="Deliciosa pizza"
        preco={25}
        porcao="8 fatias"
        id={1}
      />
    )
    expect(screen.getByText('Pizza')).toBeInTheDocument()
    expect(screen.getByText('Deliciosa pizza')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Adicionar ao carrinho'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
