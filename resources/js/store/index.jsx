import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './Slices/paginationSlice'
import searchReducer from './Slices/searchSlice';

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        search: searchReducer,
    }
})
