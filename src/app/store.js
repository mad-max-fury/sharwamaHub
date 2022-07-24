import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/loginslice";
import cartReducer from "../features/product/cartslice";
import productsReducer from "../features/product/productslice";
import { apiSlice } from "../api/apislice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    // reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedReducer,
    cart: persistedCartReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
