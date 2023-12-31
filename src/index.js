import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { store } from "./features/app/store";
import { Provider } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import { getTotalAmount, getTotalQuantity } from "./features/cart/cartSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// fetch products
store.dispatch(fetchProducts());
// get total amoung
store.dispatch(getTotalAmount());
// get total quantity
store.dispatch(getTotalQuantity());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
