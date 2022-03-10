import React from 'react'

import Inputs from './Inputs'

import "react-datetime/css/react-datetime.css";

import { state } from '../dropdowns/dataFormat/state'
import { department } from '../dropdowns/dataFormat/department'
import { rmSet, setFormModal } from '../../store'

import { useDispatch } from 'react-redux';
import { getForm, setDatas } from '../../store'

function EmployeeForm() {

    const dispatch = useDispatch();
    // dispatch Datas to rmSelect reducer
    dispatch(rmSet({ name: 'state', options: state }));
    dispatch(rmSet({ name: 'department', options: department }));

    const saveEmployee = (e) => {
        e.preventDefault();
        const formDatas = [];
        const inputs = Array.from(e.target);

        // create new data object 
        inputs.forEach((input, index) => {
            // exclude fielset
            if (index === 4) return;
            // exclude button
            if (input.value === '') return;
            // set data Object
            formDatas.push({ cellValue: input.value, category: input.id })
            // set form datas to currentEmployee in redux store
            dispatch(getForm( input.value, input.id ));
        })

        if (formDatas.length === 9) {
            dispatch(setDatas(formDatas));
            dispatch(setFormModal())
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