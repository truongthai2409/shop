import { VITE_API_BE } from '../../config';
import authSlice from './auth_slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  devTools: VITE_API_BE !== 'product'
});

// export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;