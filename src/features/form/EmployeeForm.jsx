import React, { useState } from 'react'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

import { state } from '../dropdowns/dataFormat/state'
import { department } from '../dropdowns/dataFormat/department'
import { RmSelect } from '../rmSelect/RmSelect'
import { rmSet, setFormModal } from '../../store'

import { useDispatch } from 'react-redux';
import { getForm, setDatas } from '../../store'

function EmployeeForm() {

    const [birthDay, changeBirth] = useState(new Date())
    const [startDay, changeStart] = useState(new Date())

    const dispatch = useDispatch();
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
            <div className='inputWrap'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' />
            </div>
            <div className='inputWrap'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' />
            </div>
            <div className='inputWrap'>
                <label htmlFor='dateOfBirth'>Date of Birth</label>
                <Datetime
                    inputProps={{ id: "dateOfBirth" }}
                    timeFormat={false}
                    onChange={changeBirth}
                    value={birthDay}
                />
            </div>
            <div className='inputWrap'>
                <label htmlFor='startDate'>Start Date</label>
                <Datetime
                    inputProps={{ id: "startDate" }}
                    timeFormat={false}
                    onChange={changeStart}
                    value={startDay}
                />
            </div>
            <fieldset className='address'>
                <legend>Address</legend>
                <div className='inputWrap'>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                </div>
                <div className='inputWrap'>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />
                </div>
                <div className='inputWrap'>
                    <RmSelect
                        name='state'
                    />
                </div>
                <div className='inputWrap'>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input id="zipCode" type="number" />
                </div>
            </fieldset>
            <div className='inputWrap'>
                <RmSelect
                    name='department'
                />
            </div>
            <br />
            <button className='submit-button'>Save</button>
        </form>
    )
}

export default EmployeeForm