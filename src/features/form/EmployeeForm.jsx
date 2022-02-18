import React from 'react'

import Inputs from './Inputs'

import { useDispatch } from 'react-redux';
import { getForm, setDatas, setModal } from './formSlice'


function EmployeeForm() {

    const dispatch = useDispatch();

    const saveEmployee = (e) => {
        e.preventDefault();

        const inputs = Array.from(e.target);
        const btnIndex = inputs.length - 1;
        let formDatas = [];

        // update redux store on submit
        inputs.forEach((input, index) => {
            // exclude button
            if (index === btnIndex) return;
            // set form datas to redux store
            dispatch(getForm({category: input.id, value: input.value}));
            formDatas.push({ cellValue: input.value, category: input.id });
        })
        // form validation to set datas
        if (formDatas.length === 9) {
            dispatch(setDatas(formDatas));
            dispatch(setModal());
        }
    }

    return (
        <form id='create-employee' onSubmit={saveEmployee}>
            <Inputs />
            <br />
            <button className='submit-button'>Save</button>
        </form>
    )
}

export default EmployeeForm