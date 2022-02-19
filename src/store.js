import { configureStore } from '@reduxjs/toolkit'
import { rrtableReducer } from "react-redux-table";
import formReducer from './features/form/formSlice'
import selectReducer from './features/rmSelect/rmSlice';

export const store = configureStore({
    reducer: {
        form: formReducer,
        rmSelect: selectReducer,
        rrtable: rrtableReducer 
    }
})