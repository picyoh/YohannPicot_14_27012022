import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/form/employeeSlice'
import { rrtableReducer } from "react-redux-table";

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
        rrtable: rrtableReducer 
    }
})