import { configureStore } from '@reduxjs/toolkit'
import favorisReducer from './favorisSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    favoris: favorisReducer,
    cart: cartSlice
  },
})