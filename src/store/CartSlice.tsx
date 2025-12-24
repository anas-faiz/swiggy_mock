import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart", // must be a string
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // push the new item
    },
    removeItem: (state, action) => {
      // example: remove item by index
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
