import React, { useState } from 'react'

import { DateTimePicker } from 'datetime-picker-reactjs'
import 'datetime-picker-reactjs/dist/index.css'

import { states } from '../services/states'
import { departments } from '../services/departments'

import { SelectUi } from './SelectUi'

function CreateEmployeeForm() {
    const [birthDay, changeBirth] = useState(new Date())
    const [startDay, changeStart] = useState(new Date())
    const saveEmployee = () => {
        console.log('save');
    }
    
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
            {/* <input type='text' id='start-date'></input> */}
            <fieldset className='address'>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" />

                <label htmlFor="state">State</label>
                <SelectUi
                name='states'
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
            <button onClick={saveEmployee}>Save</button>
        </form>
    )
}

export default CreateEmployeeForm