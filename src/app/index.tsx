import { configureStore } from '@reduxjs/toolkit'
import products from './Slice/productsSlice'
import userSlice from './Slice/userSlice'

export const store = configureStore({
  reducer: {
    data:products,
    users: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch