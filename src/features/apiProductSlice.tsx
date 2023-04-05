import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ProductCreate } from "../types";
import { GetAccessToken } from "../api/jwtDecodeToken";

export const apiProductSlice:any = createApi({
    reducerPath:"product",
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8083/',
      prepareHeaders: (headers, { getState }) => {
        const token = GetAccessToken();

  
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        console.log(headers.get("Authorization"));
        
        headers.forEach(element => {
          console.log(element);
        });
  
        return headers;
      },
    }),
    tagTypes:['Products'],
    endpoints:(builder)=>({
      getProductById:builder.query<any,any>({
        query:(todo)=>({
          url:'/api/products/getProductById',
          method:"POST",
          contentType: 'application/json',
          body:todo
        }),
        
        providesTags:result=>['Products']
      }),
      GetProducts:builder.query<any,any>({
        query:(todo)=>({
          url:`/api/products`,
          method:"GET",
          contentType: 'application/json',
          body:todo
        }),
        providesTags:result=>['Products']
      }),
      addProduct:builder.mutation<any,any>({
        query:(todo)=>({
          url:'/api/products/add',
          method:"POST",
          contentType: 'multipart/form-data',
          body:todo
        }),
        invalidatesTags:['Products']
      }),
      
      deleteProductById:builder.mutation<any,any>({
        query:(todo)=>({
          url:'/api/products/deleteProductById',
          method:"POST",
          contentType: 'application/json',
          body:todo
        }),
        invalidatesTags:['Products']
      }),


    })
})


export const{useGetProductsQuery,useAddProductMutation,useGetProductByIdQuery,useDeleteProductByIdMutation} = apiProductSlice;
