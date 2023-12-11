import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./ProductApi.js";
import productsReducer, { productsFetch } from "./ProductSlice.js";
import CartSlice from "./CartSlice.js";

const Store = configureStore({
    reducer: {
      products: productsReducer,
      cart: CartSlice,
      [ProductApi.reducerPath]: ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ProductApi.middleware),
  });
  
  Store.dispatch(productsFetch());

  export default Store