import { createSlice } from "@reduxjs/toolkit"
import { createMessage, fetchMessage, updateMessage } from "../../api/api"
import {  MessageState } from "../../Types/types"


const initialState:MessageState=({
    message:[],
    loading:false,
    error:null
})

const messageSlice=createSlice({
    name:'message',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMessage.fulfilled,(state,action)=>{
            state.message=action.payload
        });
        builder.addCase(createMessage.fulfilled,(state,action)=>{
            state.message.push(action.payload)
        });
        builder.addCase(updateMessage.fulfilled,(state,action)=>{
             const index = state.message.findIndex((p) => p.id === action.payload.id);
                  if (index !== -1) state.message[index] = action.payload;
        })
    }
})


export default messageSlice.reducer