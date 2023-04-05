import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/user-slice';
import userSlice from '../features/user-slice'

import { apiSlice } from "../features/apiSlice";
import { apiCategorySlice } from "../features/apiCategorySlice";
import { apiProductSlice } from "../features/apiProductSlice";
import { apiUserSlice } from "../features/apiUserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    [apiCategorySlice.reducerPath]:apiCategorySlice.reducer,
    [apiProductSlice.reducerPath]:apiProductSlice.reducer,
    [apiUserSlice.reducerPath]:apiUserSlice.reducer,
    user: userSlice,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware,apiCategorySlice.middleware,apiProductSlice.middleware,apiUserSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;