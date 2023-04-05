//DUCKS pattern
import { createSlice,PayloadAction,nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import parseJwt from "../api/jwtDecodeToken";

import { SetAccessToken,SetRefreshToken } from "../api/jwtDecodeToken";


const baseURL ='http://localhost:8083';

// interface UserState{
//     user:any;
//     loading:boolean;
//     error:string|null;
//     isAuth:boolean;
//     message:string|null;
//     allUsers:any;
// }

// :UserState 
const initialState= {
    user:{},
    chats:[{}],
    messages:[{}],
    accessToken:"",
    refreshToken:"",
    loading:false,
    error:"",
    isAuth:false,
    message:"",
    allUsers:[]
};


export const postLogin:any = createAsyncThunk('/User/Login',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/Login',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const postRegistration:any = createAsyncThunk('/User/Register',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/Register',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})



export const AuthUser:any = createAsyncThunk('',(token:string)=>{
    var decodedToken = "";
    if(token != "")
    {
        decodedToken = parseJwt(token) as any;
    }
    try{
        return decodedToken;
    }catch(err:any){
        return err.message;
    }
});



const userSlice = createSlice(
{
    name:'user',
    initialState,
    reducers:
    {
        login(state,action: PayloadAction<any>){
            state.user = action.payload
        },
        registration(state,action: PayloadAction<any>){
            state.user = action.payload.decodedToken;
        }
    },
    extraReducers(builder){
        builder
            .addCase(postLogin.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(postLogin.fulfilled,(state,action)=>{
                state.loading = false;
                let min = 1;
                // const loadedUsers = action.payload.map(unit=>{
                //     return unit;
                // })



                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;

                SetAccessToken(action.payload.accessToken);
                SetRefreshToken(action.payload.refreshToken);

                state.user = parseJwt(action.payload.accessToken);


                state.isAuth = true;

            })
            .addCase(postRegistration.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(postRegistration.fulfilled,(state,action)=>{
                state.loading = false;
                

                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;

                state.user = parseJwt(action.payload.accessToken);


                SetAccessToken(action.payload.accessToken);
                SetRefreshToken(action.payload.refreshToken);

                state.isAuth = true;

            })
            .addCase(AuthUser.fulfilled,(state,action)=>{
                if(action.payload == "")
                {
                    state.isAuth = false;
                }
                else
                {
                    state.isAuth = true;
                }
                state.user = action.payload;
            })
    }
});





export const {login,registration} = userSlice.actions;
export default userSlice.reducer;