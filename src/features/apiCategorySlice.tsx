import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiCategorySlice:any = createApi({
    reducerPath:"category",
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
    editCategory:builder.mutation<any,any>({
      query:(todo)=>({
        url:`/api/categories/edit`,
        method:"POST",
        contentType: 'application/json',
        body:todo
      }),
      invalidatesTags:['Categories']
    }),
    deleteCategory:builder.mutation<any,Number>({
      query:(todo)=>({
        url:`/api/categories/remove?id=${todo}`,
        method:"DELETE",
        contentType: 'application/json',
        body:{}
      }),
      invalidatesTags:['Categories']
    }),
    getCategoryById:builder.query<any,Number>({
      query:(todo)=>({
        url:`/api/categories/getCategoryById`,
        method:"POST",
        contentType: 'application/json',
        body:todo
      }),
      providesTags:result=>['Categories']
    })

    })
})


export const{useGetCategoriesQuery,useAddCategoryMutation,useDeleteCategoryMutation,useEditCategoryMutation,useGetCategoryByIdQuery} = apiCategorySlice;
