import { configureStore } from '@reduxjs/toolkit'
import { uiSlice, calendarSlice } from './'
import { authSlice } from './auth/authSlice' //*? si lo subo me manda error no se por qué

export const store = configureStore({
  reducer:{
    auth: authSlice,
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})