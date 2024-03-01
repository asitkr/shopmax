import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utills";

export const fetchLogin = createAsyncThunk('login/fetchLogin', async ({ data }) => {
    try {
        // console.log(data);

        const res = await axios.post(`${BASE_URL}/auth/login`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // console.log(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginUserData: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.loginUserData = action.payload;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default loginSlice.reducer;
