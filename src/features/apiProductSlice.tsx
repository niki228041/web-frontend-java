import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


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
    })
})


export const{useGetProductsQuery} = apiProductSlice;
