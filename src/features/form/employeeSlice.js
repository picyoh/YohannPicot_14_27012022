import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name:'employee',
    initialState: {
        datas: [],
        employee: [],
        modal: false,
    },
    reducers: {
        setDatas: (state, action) => {
            state.datas.push(action.payload)
        },
        getForm: (state, action) => {
            state.employee.push(action.payload)
        },
        setModal: (state, action) => {
            state.modal = action.payload
        }
    }
});

export const { setDatas, setModal, getForm } = employeeSlice.actions;

export default employeeSlice.reducer;