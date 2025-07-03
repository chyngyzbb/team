import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchProfile, updateProfileMock } from "../../api/api"
import { ProfileState, StateProfile } from "../../Types/types"



const initialState:StateProfile={
    profile:[],
    loading:false,
    error:null
}

const profileSlice=createSlice({
    name:'frofile',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProfile.fulfilled,(state,action:PayloadAction<ProfileState[]>)=>{
            state.profile=action.payload
        });
        builder.addCase(updateProfileMock.fulfilled,(state,action:PayloadAction<ProfileState[]>)=>{
            state.profile=action.payload
        })
    }
    
})

// export const {fetchProfile}=profileSlice.actions
export default profileSlice.reducer