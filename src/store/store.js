import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartSlice from './cartSlice'
import uiSlice from './UI-Slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
