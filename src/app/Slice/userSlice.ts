import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import environment from "../../Constant";
const baseURL = `${environment.user}`;

interface initialState {
    isLoading: boolean;
}

const initialState: initialState = {
    isLoading: false
}
export const userLogin = createAsyncThunk("user/login", async (data:any) => {
    try {
        const response = await axios.post(`${baseURL}/api/users/login`, data);
        console.log("response", response);
        if (response.status === 200) {
            localStorage.setItem("token", response.data.data.tokens);
            localStorage.setItem("name", response.data.data.name);
            localStorage.setItem("id", response.data.data.id);
            // console.log("Token set");
            //   actions.resetForm();
            //   checkLogin();
            //   navigate("/");
            //   setIsLogin(false)
        }
        return response.data.data;
    } catch (error) {
        throw error
    }
})

export const userRegister = createAsyncThunk("user/register", async (data:any) => {
    try {
        const response = await axios.post(`${baseURL}/api/users`, data);
        console.log("response", response);
        return response.data.data;
    } catch (error) {
        throw error
    }
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true
                return state
            })
            .addCase(userLogin.fulfilled, (state) => {
                state.isLoading = false
                return state
            })
    }
})

export default userSlice.reducer