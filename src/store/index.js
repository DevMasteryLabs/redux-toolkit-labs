import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from './moneySlice'
import songsReducer from './songsSlice'

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    songs: songsReducer
  },
})