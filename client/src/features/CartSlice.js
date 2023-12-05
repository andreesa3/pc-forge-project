import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      },
    },
  });
  
  export const { addToCart } = CartSlice.actions;
  
  export default CartSlice.reducer;
  
