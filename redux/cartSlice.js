import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
        state.value.push(action.payload)
    },
    decrement: (state, action) => {
        let index = null;
        state.value.forEach((item, i) => {
            index = action.payload.name == item.name && i
        });
        if(index != null) {
            state.value.splice(index, 1)
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer