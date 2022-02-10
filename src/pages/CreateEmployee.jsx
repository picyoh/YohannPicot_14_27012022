import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../layouts/Header'
import EmployeeForm from '../components/EmployeeForm'

function CreateEmployee() {
    return (
        <div className='create'>
            <Header />
            <div className='container'>
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <EmployeeForm />
            </div>
        </div>
    )
}

export default CreateEmployee