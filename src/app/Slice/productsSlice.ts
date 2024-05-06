import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import environment from "../../Constant";
import axios from "axios";

//Base url for Api call from env
const baseURL = `${environment.products}`;

//Initial State
interface InitialState{
  isLoading: boolean,
  products: any[],
  isError: any
}

const initialState: InitialState = {
  isLoading: false,
  products: [],
  isError: null,
};

export const getProducts = createAsyncThunk('getProducts', async()=>{
  try {
    const response = await axios.get(`${baseURL}`)
    console.log(response)
    return response.data.products
  } catch (error:any) {
    throw error
  }
})

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(getProducts.pending,(state)=>{
      state.isLoading=true
      return state
    })
    .addCase(getProducts.fulfilled,(state,{payload})=>{
      state.isLoading=false
      state.products= payload
    })
  },
});

export default products.reducer
