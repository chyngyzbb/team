import {configureStore} from "@reduxjs/toolkit"
import authReducer from './slice/authSlice'
import productReducer from './slice/productSlice'
import basketReducer from './slice/basketSlice'
import searchReducer from './slice/searchSlice'



export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        basket:basketReducer,
        search:searchReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch