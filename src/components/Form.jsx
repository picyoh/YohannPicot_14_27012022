import React from 'react'

function Form() {
    const saveEmployee = () =>{
        console.log('save');
    }

    return (
        <form action='#' id='create-employee'>
            <label for='first-name'>First Name</label>
            <input type='text' id='first-name' />
            <label for='last-name'>Last Name</label>
            <input type='text' id='last-name' />
            <label for='date-of-birth'>Date of Birth</label>
            <input type='text' id='date-of-birth' />
            <label for='start-date'>Start Date</label>
            <input type='text' id='start-date' />
            <fieldset className='address'>
                <legend>Address</legend>

                <label for="street">Street</label>
                <input id="street" type="text" />

                <label for="city">City</label>
                <input id="city" type="text" />

                <label for="state">State</label>
                <select name="state" id="state"></select>

                <label for="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>
            <label for='departement-button'>Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            <button onClick={saveEmployee}>Save</button>
        </form>
    )
}

export default Form