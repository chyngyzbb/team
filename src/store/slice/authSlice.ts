import { createSlice } from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage, saveToLocalStorage } from "../../localStorage";
import { AuthState } from "../../Types/types";





const initialState:AuthState={
    user:getLocalStorage('user'),
    loading:false,
    error:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser(state,action: PayloadAction<string|null>){
            state.user=action.payload
            saveToLocalStorage('user',action.payload)
        },
        setError(state,action:PayloadAction<string|null>){
            state.error=action.payload
        },
        setLoading(state,action:PayloadAction<boolean>){
            state.loading=action.payload
        }
    },
   
})

export const{setUser,setError,setLoading}=authSlice.actions
export default authSlice.reducer