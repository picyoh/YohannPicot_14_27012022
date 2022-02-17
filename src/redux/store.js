import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/form/formSlice'
import { rrtableReducer } from "react-redux-table";

export const store = configureStore({
    reducer: {
        form: formReducer,
        rrtable: rrtableReducer 
    }
})