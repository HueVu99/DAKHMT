import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import nhanvienReducer from '../features/nhanvien/nhanvienSlice'
import thueReducer from '../features/thue/thueSlice'
import luongReducer from '../features/luong/luongSlice'
import bhxhReducer from '../features/bhxh/bhxhSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    nhanvien: nhanvienReducer,
    thue:thueReducer,
    luong:luongReducer,
    bhxh:bhxhReducer
  },
})
