import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import EmployeeForm from '../features/form/EmployeeForm'
import FormModal from '../features/Modal'

function CreateEmployee() {
    return (
        <div className='create'>
            <Header />
            <div className='container'>
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <EmployeeForm />
                <FormModal />
            </div>
        </div>
    )
}

export default CreateEmployee