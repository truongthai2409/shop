import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth_slice from "./slices/auth_slice";
import cart_slice from "./slices/cart_slice";
import { VITE_API_BE } from "../config";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, auth_slice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: cart_slice, // Add the cart slice here
  },
  devTools: VITE_API_BE !== "product",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
