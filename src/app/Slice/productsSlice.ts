import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import environment from "../../Constant";
import axios from "axios";

//Base url for Api call from env
const baseURL = `${environment.products}`;

//Initial State
interface InitialState{
  isLoading: boolean,
  products: any[],
  cartproduts:any[],
  isError: any
}

const initialState: InitialState = {
  isLoading: false,
  products: [],
  cartproduts: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") :[],
  isError: null,
};

export const getProducts = createAsyncThunk('getProducts', async()=>{
  try {
    const response = await axios.get(`${baseURL}`)
    return response.data.products
  } catch (error:any) {
    throw error
  }
})

export const getSelectProducts = createAsyncThunk('getProductsone', async(id:number)=>{
  try {
    const response = await axios.get(`${baseURL}/${id}`)

    return response.data
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
    .addCase(getSelectProducts.pending,(state)=>{
      state.isLoading=true
      return state
    })
    .addCase(getSelectProducts.fulfilled,(state,{payload})=>{
      state.isLoading=false
      state.cartproduts.push(payload)
      const CartSring = JSON.stringify(state.cartproduts)
      localStorage.setItem('cart',CartSring)
      return state
    })
  },
});

export default products.reducer
