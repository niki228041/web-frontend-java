import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ProductCreate } from "../types";


export const apiProductSlice:any = createApi({
    reducerPath:"product",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8083"}),
    tagTypes:['Products'],
    endpoints:(builder)=>({
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
      getProductById:builder.query<any,any>({
        query:(todo)=>({
          url:'/api/products/getProductById',
          method:"POST",
          contentType: 'application/json',
          body:todo
        }),
        providesTags:result=>['Products']
      }),


    })
})


export const{useGetProductsQuery,useAddProductMutation,useGetProductByIdQuery} = apiProductSlice;
