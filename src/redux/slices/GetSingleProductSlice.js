import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utills";

export const fetchSingleProduct = createAsyncThunk('getSingleProduct/fetchProductSingle', async (data) => {
    try {
        // console.log('data');
        // console.log(data);

        const res = await axios.get(`${BASE_URL}/products/${data}`);
        console.log(res?.data);

        return res?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const getSingleProductSlice = createSlice({
    name: 'getSingleProduct',
    initialState: {
        singleProductData: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.singleProductData = action.payload;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default getSingleProductSlice.reducer;
