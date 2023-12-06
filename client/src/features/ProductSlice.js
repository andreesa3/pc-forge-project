import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockfile from '/mockfile.json';

const initialState = {
  items: [],
  status: null,
};


export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
     return mockfile;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
