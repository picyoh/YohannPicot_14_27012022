import { createSlice, current } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name:'form',
    initialState: {
        datas: [],
        employee: [
            {cellValue: "",category:"firstName"},
            {cellValue: "",category:"lastName"},
            {cellValue: "",category:"dateOfBirth"},
            {cellValue: "",category:"startDate"},
            {cellValue: "",category:"street"},
            {cellValue: "",category:"city"},
            {cellValue: "",category:"state"},
            {cellValue: "",category:"zipCode"},
            {cellValue: "",category:"department"},
        ],
        modal: false,
    },
    reducers: {
        setDatas: (state, action) => {
            state.datas.push(action.payload)
        },
        getForm: (state, action) => {
            const {cellValue, category} = action.payload;
            const newRow = state.employee.findIndex(row => row.category === category)
            state.employee[newRow].cellValue = cellValue
        },
        setModal: (state) => {
            state.modal = !state.modal
        }
    }
});

export const { setDatas, setModal, getForm } = formSlice.actions;

export default formSlice.reducer;