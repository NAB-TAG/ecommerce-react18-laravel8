import { createSlice } from "@reduxjs/toolkit";

let pageProductCached = localStorage.getItem('page-admin-product') ? localStorage.getItem('page-admin-product') : 'page=1';

const INITIAL_STATE = {
    productAdmin: `/api/products?${pageProductCached}`
};

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: INITIAL_STATE,
    reducers: {
        updatePagProducts: ( state, action ) => {
            const pag = action.payload;
            state.productAdmin = `/api/products?${ pag }`;
        }
    }
});

export const { updatePagProducts } = paginationSlice.actions;
export default paginationSlice.reducer;
