import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/user-slice';
import userSlice from '../features/user-slice'

import { apiSlice } from "../features/apiSlice";
import { apiCategorySlice } from "../features/apiCategorySlice";
import { apiProductSlice } from "../features/apiProductSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    [apiCategorySlice.reducerPath]:apiCategorySlice.reducer,
    [apiProductSlice.reducerPath]:apiProductSlice.reducer,
    user: userSlice,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware,apiCategorySlice.middleware,apiProductSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;