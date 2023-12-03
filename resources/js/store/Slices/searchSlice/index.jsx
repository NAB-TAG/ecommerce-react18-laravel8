import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchProduct: ' '
};

export const searchSlice = createSlice({
    name: 'search',
    initialState: INITIAL_STATE,
    reducers: {
        updateSearchProduct: ( state, action ) => {
            const product = action.payload;
            state.searchProduct = product;
        }
    }
})


export const { updateSearchProduct } = searchSlice.actions;
export default searchSlice.reducer;
