// store/slices/productSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL='https://api-crud.elcho.dev/api/v1/d7f73-daf9b-15876/products'
const API_URL2 = "https://6765634852b2a7619f5f643f.mockapi.io/redux";

export interface Product extends NewProduct {
  _id: string;
}

export interface NewProduct {
  name: string;
  price: string;
  image: string;
  user: string;
  client: string[];
}

// interface ProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null;
// }

// 🟩 Async thunk
// export const fetchProducts = createAsyncThunk<Product[]>(
//   "products/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get<Product[]>(API_URL2);
//       return response.data;
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error message:", error.message);
//         return rejectWithValue(error.message);
//       } else {
//         console.error("Unknown error:", error);
//       }
//     }
//   }
// );

export const fetchProducts = createAsyncThunk<
  Product[],  // Возвращаемый тип в случае success
  void,       // Тип аргументов (payload для вызова thunk)
  { rejectValue: string } // Тип значения для rejectWithValue
>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
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
  }
);

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
