import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './Slices/paginationSlice'

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
    }
})
