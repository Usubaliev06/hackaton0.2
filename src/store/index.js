import { configureStore } from '@reduxjs/toolkit'
import dataReduser from './dataSlise'




export const store = configureStore({
  reducer: {
    data: dataReduser,
  },
})
