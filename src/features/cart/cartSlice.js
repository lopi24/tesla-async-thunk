import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalAmount: 0,
  totalQuantity: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // console.log(action.payload);

      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (!existingItem) {
        state.items.push(newItem);
      } else if (existingItem.productQuantity === 5) {
        alert("You can only buy 5 pcs per item.");
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        if (existingItem.productQuantity + newItem.productQuantity > 5) {
          alert("You can only buy 5 pcs per item.");
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        } else {
          existingItem.productQuantity += newItem.productQuantity;
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));

      // && existingItem.productQuantity + newItem.productQuantity >= 5
    },

    getTotalQuantity(state) {
      state.totalQuantity = 0;
      if (state.items.length >= 1) {
        for (let i = 0; i < state.items.length; i++) {
          state.totalQuantity += state.items[i].productQuantity;
        }
      } else {
        state.totalQuantity = 0;
      }
    },
    getTotalAmount(state) {
      state.totalAmount = 0;
      if (state.items.length >= 1) {
        for (let i = 0; i < state.items.length; i++) {
          state.totalAmount +=
            state.items[i].productQuantity * state.items[i].productPrice;
        }
      } else {
        state.totalAmount = state.items.productPrice;
      }
    },
    removeItemFromCart(state, action) {
      // console.log(action.payload);
      const newCartItems = state.items.filter(
        (item) => item.productId !== action.payload
      );

      state.items = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateItemQuantity(state, action) {
      const newQty = action.payload.newQty;
      const productId = action.payload.productId;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      existingItem.productQuantity = newQty;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const {
  addItemToCart,
  getTotalAmount,
  getTotalQuantity,
  removeItemFromCart,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
