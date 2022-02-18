import { configureStore } from '@reduxjs/toolkit'
import { rrtableReducer } from "react-redux-table";
import formReducer from '../features/form/formSlice'
import selectReducer from '../features/selectUi/selectSlice';

export const store = configureStore({
    reducer: {
        form: formReducer,
        select: selectReducer,
        rrtable: rrtableReducer 
    }
})