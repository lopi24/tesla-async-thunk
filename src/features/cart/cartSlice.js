import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const CART_URL =
//   "https://react-http-41d46-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalAmount: 0,
  totalQuantity: 0,
  status: "idle",
  error: null,
};

// THIS IS GOOD WHEN ADDING TO CART IT IS SAVED TO THE LOCALSTORAGE FIRST AND THEN AFTER WHEN CHECKOUT SEND TO DB. SEE VIDEO INDIAN GUY. AND THEN APPLY IT HERE

// export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
//   try {
//     const response = await axios.get(CART_URL);
//     console.log(response.data);
//     const loadedCart = [];
//     const data = response.data;
//     for (const key in data) {
//       loadedCart.push({
//         key: key,
//         cartId: key,
//         name: data[key].name,
//       });
//     }
//     console.log(loadedCart);
//     return loadedCart;
//   } catch (err) {
//     return err.message;
//   }
// });

// export const sendCart = createAsyncThunk("cart/sendCart", async (cartData) => {
//   try {
//     const response = await axios.post(CART_URL, cartData);
//     console.log(response);
//     return response.data;
//   } catch (err) {
//     return err.message;
//   }
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // console.log(action.payload);
      const itemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].productQuantity += 1;
      } else {
        const product = { ...action.payload, productQuantity: 1 };
        state.items.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
  // extraReducers(builder) {
  //   builder
  //     // fetching data from cart
  //     // pending
  //     .addCase(fetchCart.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     // fulfilled
  //     .addCase(fetchCart.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       console.log(action);
  //       // cartAdapter.upsertMany(state, action.payload);
  //       state.items = action.payload;
  //     })
  //     // rejected
  //     .addCase(fetchCart.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     })
  //     // adding to cart
  //     .addCase(sendCart.fulfilled, (state, action) => {
  //       // cartAdapter.addOne(state, action.payload);
  //       state.items.push(action.payload);
  //     });
  // },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
