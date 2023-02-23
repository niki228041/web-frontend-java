import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/user-slice';
import userSlice from '../features/user-slice'

import { apiSlice } from "../features/apiSlice";
import { apiCategorySlice } from "../features/apiCategorySlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    [apiCategorySlice.reducerPath]:apiCategorySlice.reducer,
    user: userSlice,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware,apiCategorySlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;