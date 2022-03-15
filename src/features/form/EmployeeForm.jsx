import React from 'react'

import Inputs from './Inputs'

import "react-datetime/css/react-datetime.css";

import { useDispatch } from 'react-redux';
import { getForm } from './form.actions'
import { setFormModal } from '../modal/formModal.actions'
import { setDatas } from '../table/datas.actions'


function EmployeeForm() {

    const dispatch = useDispatch();

    const saveEmployee = (e) => {
        e.preventDefault();
        const formDatas = [];
        const inputs = Array.from(e.target);
        // create new data object 
        inputs.forEach((input, index) => {
            // exclude button
            if (input.value === '') return;
            // set data Object
            formDatas.push({ cellValue: input.value, category: input.id })
            // set form datas to currentEmployee in redux store
            dispatch(getForm(input.value, input.id));
        })

        console.log(formDatas.length)
        if (formDatas.length === 9) {
            dispatch(setFormModal(true))
            dispatch(setDatas(formDatas));
        }
    }


    return (
        <form id='create-employee' onSubmit={ saveEmployee }>
            <Inputs />
            <br />
            <button className='submit-button'>Save</button>
        </form>
    )
}

export default EmployeeForm