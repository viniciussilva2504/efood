import cartReducer, { add, open, close } from './Cart'
import type { CartState } from './Cart'

describe('Cart reducer', () => {
  const initialState: CartState = {
    items: [],
    isOpen: false,
    isOrder: false,
    isPayment: false
  }

  it('should open and close the cart', () => {
    let state = cartReducer(initialState, open())
    expect(state.isOpen).toBe(true)
    state = cartReducer(state, close())
    expect(state.isOpen).toBe(false)
  })

  it('should add an item to the cart', () => {
    const product = {
      id: 1,
      nome: 'Pizza',
      foto: '',
      descricao: '',
      preco: 10,
      porcao: '',
      quantidade: 1
    }
    const state = cartReducer(initialState, add(product))
    expect(state.items.length).toBe(1)
    expect(state.items[0].nome).toBe('Pizza')
  })
})
