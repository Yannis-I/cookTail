import { configureStore } from '@reduxjs/toolkit'
import favorisReducer from './favorisSlice'

export const store = configureStore({
  reducer: {
    favoris: favorisReducer
  },
})