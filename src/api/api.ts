// store/slices/productSlice.ts
import { createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";


// const API_URL='https://api-crud.elcho.dev/api/v1/d7f73-daf9b-15876/products'
const API_URL2='https://6765634852b2a7619f5f643f.mockapi.io/redux'

export interface Product {
  _id: string;
  name: string;
  price: number;
  image:string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// 🟩 Async thunk
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Product[]>(API_URL2);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);


// 🟡 POST
export const createProduct = createAsyncThunk<Product, Omit<Product, "id">>(
  "products/createProduct",
  async (newProduct) => {
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
export const updateProduct = createAsyncThunk<Product, Product>(
  "products/updateProduct",
  async (updateProductInfo) => {
    console.log(updateProductInfo);
    
    const res = await axios.put(`${API_URL2}/${updateProductInfo._id}`, {...updateProductInfo.newPro,_id:updateProductInfo._id});
    return res.data;
  }
);
// 🔵 PUT
export const orderProduct = createAsyncThunk<Product, Product>(
  "products/orderProduct",
  async (orderProductInfo) => {
    console.log(orderProductInfo);
    
    const res = await axios.put(`${API_URL2}/${orderProductInfo._id}`, {...orderProductInfo.newPro,_id:orderProductInfo._id});
    return res.data;
  }
);