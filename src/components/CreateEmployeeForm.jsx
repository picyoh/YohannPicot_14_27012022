import React, { useState } from 'react'

import { DateTimePicker } from 'datetime-picker-reactjs'
import 'datetime-picker-reactjs/dist/index.css'

import { states } from '../services/states'
import { departments } from '../services/departments'

import { SelectUi } from './SelectUi'
import { Modal } from './Modal'

function CreateEmployeeForm() {
    
    const [birthDay, changeBirth] = useState(new Date())
    const [startDay, changeStart] = useState(new Date())
    const [newEmployeeSaved, saveEmployee] = useState(false);

    const submitForm = () => {
        console.log('save');
        saveEmployee(true)
    }

    // if (newEmployeeSaved) {
    //     return <Modal />
    // }

    return (
        <form action='#' id='create-employee'>
            <label htmlFor='first-name'>First Name</label>
            <input type='text' id='first-name' />
            
            <label htmlFor='last-name'>Last Name</label>
            <input type='text' id='last-name' />
            
            <label htmlFor='date-of-birth'>Date of Birth</label>
            <DateTimePicker
                onChange={changeBirth}
                value={birthDay}
            />
            
            <label htmlFor='start-date'>Start Date</label>
            <DateTimePicker
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
                options={ states }
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>
            <label htmlFor='department-button'>Department</label>
            <SelectUi 
            name='department' 
            options={ departments }
            />
            <button onClick={submitForm}>Save</button>
        </form>
    )
}

export default CreateEmployeeForm