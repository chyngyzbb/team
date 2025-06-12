// store/slices/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL='https://api-crud.elcho.dev/api/v1/d7f73-daf9b-15876/products'

export interface Product {
  id: string;
  name: string;
  price: number;
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
      const response = await axios.get<Product[]>(API_URL);
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
    const res = await axios.post(API_URL, newProduct);
    return res.data;
  }
);

// 🔴 DELETE
export const deleteProduct = createAsyncThunk<string, string>(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// 🔵 PUT
export const updateProduct = createAsyncThunk<Product, Product>(
  "products/updateProduct",
  async (id,updatedProduct) => {
    console.log(id,updateProduct);
    
    const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return res.data;
  }
);