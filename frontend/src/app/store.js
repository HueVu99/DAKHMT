import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import nhanvienReducer from '../features/nhanvien/nhanvienSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    nhanvien: nhanvienReducer,
  },
})
