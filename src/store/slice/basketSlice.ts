

// export interface Order{
//     order:[],
//     loading:boolean,
//     error:null|string
// }
 
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../api/api"
import { getBasketLocalStorage, saveToLocalStorage } from "../../localStorage"

const initialState={
    basket:getBasketLocalStorage('basket'),
    loading:false,
    error:null
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        setBasket(state,action:PayloadAction<Product>){
            // console.log(action.payload);            
            state.basket.push(action.payload)
            saveToLocalStorage('basket',state.basket)
        },
        removeBasket(state,action:PayloadAction<string>){
            console.log("storeBasket:",action.payload);
            
            state.basket=state.basket.filter((el:Product)=>el._id!==action.payload)
            saveToLocalStorage('basket',state.basket)
        }
    }

})

export const {setBasket,removeBasket}=basketSlice.actions
export default basketSlice.reducer