import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchProduct: ' ',
    minSearchProduct: 0,
    maxSearchProduct: 1000000000000000000000000000000,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState: INITIAL_STATE,
    reducers: {
        updateSearchProduct: ( state, action ) => {
            const product = action.payload;
            state.searchProduct = product;
        },
        updateMinSearchProduct: ( state, action ) => {
            const minSearch = action.payload;
            state.minSearchProduct = minSearch;
        },
        updateMaxSearchProduct: ( state, action ) => {
            const maxSearch = action.payload;
            state.maxSearchProduct = maxSearch;
        }
    }
})


export const { updateSearchProduct, updateMinSearchProduct, updateMaxSearchProduct } = searchSlice.actions;
export default searchSlice.reducer;
