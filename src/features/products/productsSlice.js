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

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.productId,
});

const initialState = productsAdapter.getInitialState({
  status: "idle", //"idle" || "loading" || "succeeded" || "failed"
  error: null,
  count: 0,
});

// middleware
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCT_URL);
      // console.log(response);
      const loadedProducts = [];
      const data = response.data;
      // console.log(data);
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
          subCategory: data[key].subCategory,
          outOfStock: data[key].outOfStock,
          imgs: loadedImgs,
          information: data[key].information,
        });
      }
      console.log(loadedProducts);
      return loadedProducts;
    } catch (err) {
      return err.message;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // for testing side effects
    increaseCount(state, action) {
      state.count += 1;
    },
  },
  // this is for handling fetch requests
  extraReducers(builder) {
    builder
      // pending
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      // fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.status = "succeeded";
        // state.products = action.payload;
        productsAdapter.upsertMany(state, action.payload);
      })
      // rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const selectAllProducts = (state) => state.products.products;

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.products);

export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

// for testing rendering
export const getCount = (state) => state.products.count;

export const selectProductsByCategory = createSelector(
  [selectAllProducts, (state, categoryType) => categoryType],
  (products, categoryType) => {
    const filterProducts = products.filter(
      (product) => product.category === categoryType
    );

    const sortedProducts = Object.values(
      filterProducts?.reduce((accum, currVal) => {
        if (accum.hasOwnProperty(currVal.subCategory)) {
          accum[currVal.subCategory].productDetails.push(currVal);
          if (!accum[currVal.subCategory].tags.includes(currVal.tags)) {
            accum[currVal.subCategory].tags.push(currVal.tags);
          }
        } else
          accum[currVal.subCategory] = {
            subCategory: currVal.subCategory,
            tags: [currVal.tags],
            productDetails: [currVal],
          };
        return accum;
      }, {})
    );

    return sortedProducts;
  }
);

export const selectProductsBySubCategory = createSelector(
  [selectAllProducts, (state, subCategoryType) => subCategoryType],
  (products, subCategoryType) => {
    const filterProducts = products.filter(
      (product) => product.subCategory === subCategoryType
    );

    const sortedProducts = Object.values(
      filterProducts?.reduce((accum, currVal) => {
        if (accum.hasOwnProperty(currVal.subCategory)) {
          accum[currVal.subCategory].productDetails.push(currVal);
          if (!accum[currVal.subCategory].tags.includes(currVal.tags)) {
            accum[currVal.subCategory].tags.push(currVal.tags);
          }
        } else
          accum[currVal.subCategory] = {
            subCategory: currVal.subCategory,
            tags: [currVal.tags],
            productDetails: [currVal],
          };
        return accum;
      }, {})
    );
    return sortedProducts;
  }
);

export const { increaseCount } = productsSlice.actions;

export default productsSlice.reducer;
