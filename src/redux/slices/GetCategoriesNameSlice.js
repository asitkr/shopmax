import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utills";

export const fetchAllCategoryName = createAsyncThunk('getCategory/fetchCategoryName', async () => {
    try {
        // console.log('data');

        const res = await axios.get(`${BASE_URL}/products/categories`);

        // console.log(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const getCategoryNameSlice = createSlice({
    name: 'getCategory',
    initialState: {
        categoryDataName: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategoryName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllCategoryName.fulfilled, (state, action) => {
                state.loading = false;
                state.categoryDataName = action.payload;
            })
            .addCase(fetchAllCategoryName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default getCategoryNameSlice.reducer;
