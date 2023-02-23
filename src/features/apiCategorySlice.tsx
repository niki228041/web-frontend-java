import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiCategorySlice:any = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8083"}),
    tagTypes:['Categories'],
    endpoints:(builder)=>({
      getCategories:builder.query<any,any>({
        query:(todo)=>({
          url:'/api/categories',
          method:"GET",
          body:todo
        }),
        providesTags:result=>['Categories']
    }),
      addCategory:builder.mutation<any,any>({
        query:(todo)=>({
          url:'/api/categories/add',
          method:"POST",
          contentType: 'application/json',
          body:todo
        }),
        invalidatesTags:['Categories']
    }),
    

    })
})


export const{useGetCategoriesQuery,useAddCategoryMutation} = apiCategorySlice;

