import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchProduct: '%20',
    minSearchProduct: 0,
    maxSearchProduct: 1000000000000000000000000000000,
    sizesProducts: JSON.stringify([]),
    colorsProducts: JSON.stringify([]),
    categoriesProducts: JSON.stringify([]),
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
        },
        updateSizesProducts: (state, action) => {
            const sizes = action.payload;
            state.sizesProducts = sizes
        },
        updateColorsProducts: ( state, action ) => {
            const colors = action.payload;
            state.colorsProducts = colors;
        },
        updateCategoriesProducts: ( state, action ) => {
            const categories = action.payload;
            state.categoriesProducts = categories;
        }
    }
})


export const {
    updateSearchProduct,
    updateMinSearchProduct,
    updateMaxSearchProduct,
    updateSizesProducts,
    updateColorsProducts,
    updateCategoriesProducts,
} = searchSlice.actions;
export default searchSlice.reducer;
