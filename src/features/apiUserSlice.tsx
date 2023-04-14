import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiUserSlice:any = createApi({
    reducerPath:"users",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8083"}),
    tagTypes:['Users'],

    endpoints:(builder)=>({
    registerUser:builder.mutation<any,any>({
      query:(todo)=>({
        url:'/account/register',
        method:"POST",
        body:todo
      }),
      invalidatesTags:['Users']
    }),
    loginUser:builder.mutation<any,any>({
      query:(todo)=>({
        url:'/account/login',
        method:"POST",
        body:todo
      }),
      invalidatesTags:['Users']
    }),
    loginGoogleUser:builder.mutation<any,any>({
      query:(todo)=>({
        url:'/account/google-auth',
        method:"POST",
        body:todo
      }),
      invalidatesTags:['Users']
    }),

    })
})


export const{useRegisterUserMutation,useLoginUserMutation,useLoginGoogleUserMutation} = apiUserSlice;
