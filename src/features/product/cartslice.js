import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sharwamaHub from "../../api";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // reducers
    addToCart: (state, action) => {
      // check if item already in cart
      const cartItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // update cart total amount
      state.cartTotalAmount += action.payload.price;

      if (cartItem === -1) {
        // if item does not exist in cart, add it
        const newCartItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newCartItem);
        state.cartTotalQuantity += 1;
      } else {
        // if item already exists in cart, increase quantity
        state.cartItems[cartItem].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartTotalAmount -= action.payload.price;

      if (state.cartItems[cartItem].quantity > 1) {
        state.cartItems[cartItem].quantity -= 1;
      } else {
        state.cartItems.splice(cartItem, 1);
        state.cartTotalQuantity -= 1;
      }
    },
    emptyCart: (state) => {
      state.cartItems.splice(0, state.cartItems.length);
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
    },
  },
});

export const getCartItems = (state) => state.cart?.cartItems;
export const getCartTotalQuantity = (state) => state.cart?.cartTotalQuantity;
export const getCartTotalAmount = (state) => state.cart?.cartTotalAmount;

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
