import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice.js";


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        // products: dummy,
        // cart: dummy,
    },
});