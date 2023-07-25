import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../products/productsSlice";
import cartSlice from "../cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
