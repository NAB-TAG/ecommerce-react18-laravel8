import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// usar un cache
const searchProductResult = localStorage.getItem('search-product-result') ? localStorage.getItem('search-product-result') : ' ';
let pageProductCached = localStorage.getItem('page-product') ? '?'+localStorage.getItem('page-product') : '';
let pageProductAdminCached = localStorage.getItem('page-admin-product') ? localStorage.getItem('page-admin-product') : 'page=1';
let pageCategoryCached = localStorage.getItem('page-admin-category') ? localStorage.getItem('page-admin-category') : 'page=1';
let pageAdCached = localStorage.getItem('page-admin-ad') ? localStorage.getItem('page-admin-ad') : 'page=1';

const INITIAL_STATE = {
    product: `/api/products/search`,
    productAdmin: `/api/products?${pageProductAdminCached}`,
    categoryAdmin: `/api/categories?${pageCategoryCached}`,
    adAdmin: `/api/ads?${ pageAdCached }`
};

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: INITIAL_STATE,
    reducers: {
        updatePagAdminProducts: ( state, action ) => {
            const pag = action.payload;
            state.productAdmin = `/api/products?${ pag }`;
        },
        updatePagProducts: ( state, action ) => {
            const pag = action.payload;
            state.product = pag ;
        },
        updatePagCategories: ( state, action ) => {
            const pag = action.payload;
            state.categoryAdmin = `/api/categories?${ pag }`;
        },
        updatePagAds: ( state, action ) => {
            const pag = action.payload;
            state.adAdmin = `/api/ads?${ pag }`;
        },
    }
});

export const { updatePagProducts, updatePagAdminProducts, updatePagCategories, updatePagAds } = paginationSlice.actions;
export default paginationSlice.reducer;
