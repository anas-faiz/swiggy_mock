import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer, // key = slice name, value = reducer
  },
});

export default AppStore;
