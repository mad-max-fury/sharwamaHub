import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sharwamaHub from "../../api";
const initialState = {
  products: [
    {
      id: 1,
      name: "product 1",
      price: 100,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,

      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 5,
      name: "product 5",
      price: 500,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 6,
      name: "product 6",
      price: 600,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
    {
      id: 7,
      name: "product 7",
      price: 700,
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNp6-aMsGaWtazlLIbrLxUbKdM187SHrwYNDNaY=w114-h114-n-k-no",
    },
  ],
  category: [
    "Sharwama",
    "Burger",
    "SandWich",
    "Popcorn",
    "Smoothies",
    "Milkshake",
  ],
  loading: false,
  error: null,
};

//get products

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await sharwamaHub.get("/products");
    return response.data;
  }
);
export const getCategory = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await sharwamaHub.get("/category");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const getAllProducts = (state) => state.products?.products;
export const getProductsLoading = (state) => state.products?.loading;
export const getProductsError = (state) => state.products?.error;
export const getAllCategory = (state) => state.products?.category;

export default productsSlice.reducer;
