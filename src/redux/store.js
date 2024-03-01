import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import GetCategoriesNameSlice from "./slices/GetCategoriesNameSlice";
import GetAllProduct from "./slices/GetAllProduct";
import GetSingleProductSlice from "./slices/GetSingleProductSlice";

const store = configureStore({
    reducer: {
        login: LoginSlice,
        categoryName: GetCategoriesNameSlice,
        allProduct: GetAllProduct,
        singleProduct: GetSingleProductSlice,
    }
})

export default store;