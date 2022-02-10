import React, { useState } from 'react'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

import { states } from '../services/states'
import { departments } from '../services/departments'

import { SelectUi } from './SelectUi'
import { Modal } from './Modal'

import { useDispatch } from 'react-redux';
import { getForm, setDatas } from '../services/store'

function EmployeeForm() {

    const [birthDay, changeBirth] = useState(new Date())
    const [startDay, changeStart] = useState(new Date())
    const [newEmployeeSaved, savingEmployee] = useState(false);
    
    const dispatch = useDispatch();
    const saveEmployee = (e) => {
        e.preventDefault();
        // check names in datas
        // birthday > startDay
        const formDatas = [];
        const inputs = Array.from(e.target);

        // create new data object 
        inputs.forEach((input, index) => {
            // exclude fielset
            if (index === 4) return;
            // exclude button
            if (input.value === '') return;
            // set data Object
            formDatas.push({cellValue: input.value, category: input.id})
            // set form datas to data pool
            // dispatch(getForm( input.value, input.id ));
        })
        
        console.log(formDatas)
        dispatch(setDatas(formDatas));

        savingEmployee(true)
    }

    if (newEmployeeSaved) {
        return (
            <Modal />,
            savingEmployee(false)
        )
    }

    return (
        <form id='create-employee' onSubmit={saveEmployee}>
            <label htmlFor='first-name'>First Name</label>
            <input type='text' id='first-name' />

            <label htmlFor='last-name'>Last Name</label>
            <input type='text' id='last-name' />

            <label htmlFor='date-of-birth'>Date of Birth</label>
            <Datetime
                inputProps={{id:"date-of-birth"}}
                timeFormat={false}
                onChange={changeBirth}
                value={birthDay}
            />

            <label htmlFor='start-date'>Start Date</label>
            <Datetime
                inputProps={{id:"start-date"}}
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
                    options={states}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>
            <SelectUi
                name='department'
                options={departments}
            />
            <br />
            <button className='submit-button'>Save</button>
        </form>
    )
}

export default EmployeeForm