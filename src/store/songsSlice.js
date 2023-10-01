import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: ['Take Five', 'Claire de Lune'],
}

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.list.push(action.payload)
      // OR
      // state.list = [...state.list, action.payload]
    },
    removeSong: (state, action) => {
      state.list.splice(action.payload, 1)
      // OR 
      // state.list = state.list.filter((song, index) => index !== action.payload)
    },
    removeAll: (state) => {
      state.list.splice(0, state.list.length)
      // OR
      // state.list = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSong, removeSong, removeAll } = songsSlice.actions

export default songsSlice.reducer