import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../pages/Home'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  isOrder: boolean
  isPayment: boolean
}

export type { CartState }

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrder: false,
  isPayment: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },

    openOrder: (state) => {
      state.isOrder = true
    },
    closeOrder: (state) => {
      state.isOrder = false
    },

    openPayment: (state) => {
      state.isPayment = true
    },
    closePayment: (state) => {
      state.isPayment = false
    },

    add: (state, action: PayloadAction<CardapioItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        const geraId = Date.now() // Usar timestamp para evitar conflitos
        state.items.push({ 
          ...action.payload, 
          id: geraId, 
          quantidade: action.payload.quantidade || 1 
        })
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantidade += 1
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        if (item.quantidade > 1) {
          item.quantidade -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },

    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
  open,
  close,
  openOrder,
  closeOrder,
  openPayment,
  closePayment,
  clear
} = cartSlice.actions
export default cartSlice.reducer
