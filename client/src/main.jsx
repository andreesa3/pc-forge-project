import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ScrollTop from './features/ScrollTop.js'

import productsReducer, { productsFetch } from "./features/ProductSlice.js"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import { ProductApi } from './features/ProductApi.js'
import CartSlice from './features/CartSlice.js'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

store.dispatch(productsFetch());

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ScrollTop>  {/*per scrollare in alto ad ogni cambio route */}
   <Provider store={store}>
  <App />
  </Provider>
  </ScrollTop>
  </BrowserRouter>,
)
