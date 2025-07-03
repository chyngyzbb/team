import {configureStore} from "@reduxjs/toolkit"
import authReducer from './slice/authSlice'
import productReducer from './slice/productSlice'
import basketReducer from './slice/basketSlice'
import searchReducer from './slice/searchSlice'
import messageReducer from './slice/messageSlice'
import profileReducer from './slice/profileSlice'



export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        basket:basketReducer,
        search:searchReducer,
        message:messageReducer,
        profile:profileReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch