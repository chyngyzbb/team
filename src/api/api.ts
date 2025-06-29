// store/slices/productSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MessageType, MessageTypeId, NewProduct, Product } from "../Types/types";

// const API_URL='https://api-crud.elcho.dev/api/v1/d7f73-daf9b-15876/products'
const API_URL2 = "https://6765634852b2a7619f5f643f.mockapi.io/redux";



export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Product[]>(API_URL2);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("Unknown error");
    }
  }
});

// 🟡 POST
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct: NewProduct) => {
    const res = await axios.post(API_URL2, newProduct);
    return res.data;
  }
);

// 🔴 DELETE
export const deleteProduct = createAsyncThunk<string, string>(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL2}/${id}`);
    return id;
  }
);

// 🔵 PUT
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updateProductInfo: Product) => {
    console.log(updateProductInfo);

    const res = await axios.put(`${API_URL2}/${updateProductInfo._id}`, {
      ...updateProductInfo,
      _id: updateProductInfo._id,
    });
    return res.data;
  }
);
// 🔵 PUT
// export const orderProduct = createAsyncThunk<Product, Product>(
//   "products/orderProduct",
//   async (orderProductInfo) => {
//     console.log(orderProductInfo);

//     const res = await axios.put(`${API_URL2}/${orderProductInfo._id}`, {...orderProductInfo.newPro,_id:orderProductInfo._id});
//     return res.data;
//   }
// );

/////////////////////////////////////////////////////////////////////////////////////////////
//            Message


const api = "https://680dcc8ec47cb8074d913800.mockapi.io/message";


export const fetchMessage = createAsyncThunk("message/getMessage", async () => {
  const res = await axios.get(api);
  return res.data;
});

export const createMessage=createAsyncThunk("message/createMessage",
  async (value:MessageType)=>{
    const res= await axios.post(api,value)
    return res.data
  }
)

export const updateMessage=createAsyncThunk("message/updateMessage",
  async(value:MessageTypeId)=>{
    const res=await axios.put(`${api}/${value.id}`,{...value})
    return res.data
  })