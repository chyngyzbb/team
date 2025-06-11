import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, fetchProducts, Product } from "../../api/api";



const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔄 Pending
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // ✅ Success
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.loading = false;
      })
      // ❌ Error
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
         // POST
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
       // DELETE
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    });
  },
});

export default productSlice.reducer;
