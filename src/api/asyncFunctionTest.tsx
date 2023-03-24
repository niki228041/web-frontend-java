import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetProductByIdQuery } from "../features/apiProductSlice";


export const getProductById = createAsyncThunk(
    'product/getById',
    async (id:any, { rejectWithValue }) => {
      try {
        const response = await useGetProductByIdQuery(id);
        return response;
      } catch (error:any) {
        return rejectWithValue(error.response.data);
      }
    }
  );