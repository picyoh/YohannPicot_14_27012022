import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../components/Form'

function Container(){
    return(
        <div className='container'>
            <Link to='/employee-list'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form />
        </div>
    )
}

export default Container