import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utills";

export const fetchAllProduct = createAsyncThunk('getProduct/fetchProduct', async () => {
    try {
        // console.log('data');

        const res = await axios.get(`${BASE_URL}/products`);

        // console.log(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const getAllProductSlice = createSlice({
    name: 'getProduct',
    initialState: {
        productData: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = action.payload;
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default getAllProductSlice.reducer;
