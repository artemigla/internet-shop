import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slices/productSlice';
import modalSlice from '../slices/modalSlice';
import cartSlice from '../slices/cartSlice';

export const store = configureStore({
    reducer: {
        product: productSlice,
        modal: modalSlice,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;