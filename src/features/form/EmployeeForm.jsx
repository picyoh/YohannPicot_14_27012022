import React, { useState } from 'react'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

import { SelectUi } from '../selectUi/SelectUi'
import { state } from '../selectUi/datas/state'
import { department } from '../selectUi/datas/department'

import { useDispatch } from 'react-redux';
import { getForm, setDatas, setModal } from './employeeSlice'

function EmployeeForm() {

    const [birthDay, changeBirth] = useState(new Date())
    const [startDay, changeStart] = useState(new Date())

    const dispatch = useDispatch();
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
            // set form datas to data pool
            dispatch(getForm({ cellValue: input.value, category: input.id }));
        })

        // console.log(formDatas)
        if (formDatas.length === 9) {
            dispatch(setDatas(formDatas));
            dispatch(setModal());
        }
    }

return (
    <form id='create-employee' onSubmit={saveEmployee}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' />

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' />

        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <Datetime
            inputProps={{ id: "dateOfBirth" }}
            timeFormat={false}
            onChange={changeBirth}
            value={birthDay}
        />

        <label htmlFor='start-date'>Start Date</label>
        <Datetime
            inputProps={{ id: "startDate" }}
            timeFormat={false}
            onChange={changeStart}
            value={startDay}
        />
        <fieldset className='address'>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <SelectUi
                name='state'
                options={state}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" />
        </fieldset>
        <SelectUi
            name='department'
            options={department}
        />
        <br />
        <button className='submit-button'>Save</button>
    </form>
)
}

export default EmployeeForm