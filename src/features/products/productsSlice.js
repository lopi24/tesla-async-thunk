import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

// this below is for product url from firebase
const PRODUCT_URL =
  "https://react-http-41d46-default-rtdb.asia-southeast1.firebasedatabase.app/products.json";

// TRY TO CHANGE THE STRUTURE OF THE DATABASE MAKE IT LIKE TESLA{productId {name, price, imgs{imgId:img}, category, tags(this is for the at-home in charging)}}

// const productsAdapter = createEntityAdapter({
//   selectId: (product) => product.productId,
// });

// const productsAdapter = createEntityAdapter();

// const initialState = productsAdapter.getInitialState({
//   status: "idle", //"idle" || "loading" || "succeeded" || "failed"
//   error: null,
// });

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

// middleware
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCT_URL);
      console.log(response);
      const loadedProducts = [];
      const data = response.data;
      for (const key in data) {
        const imgs = data[key].imgs;
        const loadedImgs = [];
        for (const img in imgs) {
          loadedImgs.push(imgs[img]);
        }
        loadedProducts.push({
          key: key,
          productId: key,
          name: data[key].name,
          price: data[key].price,
          category: data[key].category,
          tags: data[key].tags,
          imgs: loadedImgs,
        });
      }
      console.log(loadedProducts);
      // return [...response.data];
      return loadedProducts;
    } catch (err) {
      return err.message;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // this is for handling fetch requests
  extraReducers(builder) {
    builder
      // pending
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      //fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        // this below doesn't work
        state.products = action.payload;
        // return action.payload;
        // const loadedProducts = action.payload.map((product) => {
        //   console.log(product);
        //   return product;
        // });
        // console.log(loadedProducts);
      });
  },
});

export const selectAllProducts = (state) => state.products.products;

// export const { selectAll: selectAllProducts } = productsAdapter.getSelectors(
//   (state) => state.products
// );

export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

// createSelectors - this creates a memoized selector. It won't rerun until products or the category changes.
// this createSelector is for optimization, it will memoized the products so that whenever there's a side effect it wont re-render the whole items(ex. if there are 100 items, it wont render 100).
export const selectProductsByCategory = createSelector(
  [selectAllProducts, (state, categoryType) => categoryType],
  (products, categoryType) =>
    products.filter((product) => product.category === categoryType)
);

export default productsSlice.reducer;
