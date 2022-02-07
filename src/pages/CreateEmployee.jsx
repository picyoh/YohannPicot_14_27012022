import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../layouts/Header'
import Form from '../components/CreateEmployeeForm'

function Create() {
    return (
        <div className='create'>
            <Header />
            <div className='container'>
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form />
            </div>
        </div>
    )
}

export default Create