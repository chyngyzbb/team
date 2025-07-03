import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SearchState } from "../../Types/types"




const initialState:SearchState={
    search:'',
    loading:false,
    error:null
}

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearch(state,action:PayloadAction<string>){
            state.search=action.payload
        }
    }
})

export const {setSearch}=searchSlice.actions
export default searchSlice.reducer