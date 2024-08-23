import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth_slice from "./slices/auth_slice";
import { VITE_API_BE } from "../config";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, auth_slice);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  devTools: VITE_API_BE !== "product",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatchAuth = typeof store.dispatch;
export type RootStateAuth = ReturnType<typeof store.getState>;
