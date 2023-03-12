import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favorisSlice = createSlice({
  name: 'favoris',
  initialState,
  reducers: {
    increment: (state, action) => {
        state.value.push(action.payload)
    },
    decrement: (state, action) => {
        let index = null;
        state.value.forEach((item, i) => {
            index = action.payload.id == item.id && i
        });
        if(index != null) {
            state.value.splice(index, 1)
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = favorisSlice.actions

export default favorisSlice.reducer