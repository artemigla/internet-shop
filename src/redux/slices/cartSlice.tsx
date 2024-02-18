/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        console.log('cart', cart);

        return JSON.parse(localStorage.getItem('cart') || '""')
    } else {
        return [];
    }
}
const initialState = {
    data: fetchFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    deliveryCharge: 1000,
    isCart: false
}

const storeInLocalStorage = (data: any) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const tempItem = state.data.find((item: any) => item.id === action.payload.id);
            if (tempItem) {
                const tempCart = state.data.map((item: any) => {
                    if (item.id === action.payload.id) {
                        let newQty = item.quantity + action.payload.quantity;
                        let newTotalPrice = newQty * item.price;
                        return { ...item, quantity: newQty, totalPrice: newTotalPrice };
                    } else {
                        return item;
                    }
                });
                state.data = tempCart;
                storeInLocalStorage(state.data);
            } else {
                state.data.push(action.payload);
                storeInLocalStorage(state.data);
            }
        },

        removeFromCart(state, action) {
            const tempCart = state.data.filter((item: any) => item.id !== action.payload);
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        clearCart(state) {
            state.data = [];
            storeInLocalStorage(state.data);
        },
        toggleCartQty(state, action) {
            const tempCart = state.data.map((item: any) => {
                if (item.id === action.payload.id) {
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;
                    if (action.payload.type === "INC") {
                        tempQty++;
                        tempTotalPrice = tempQty * item.price;
                    }
                    if (action.payload.type === "DEC") {
                        tempQty--;
                        if (tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.price;
                    }
                    return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
                } else {
                    return item;
                }
            });
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        getCartTotal(state) {
            state.totalAmount = state.data.reduce((cartTotal: any, cartItem: { totalPrice: any; }) => {
                return cartTotal += cartItem.totalPrice;
            }, 0);
            state.totalItems = state.data.length;
        }
    }
})

export const { addToCart, clearCart, getCartTotal, removeFromCart, toggleCartQty } = cartSlice.actions;
export default cartSlice.reducer;