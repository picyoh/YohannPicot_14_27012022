import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../layouts/Header'
import EmployeeForm from '../features/form/EmployeeForm'
import FormModal from '../features/modal/FormModal'

function CreateEmployee() {
    return (
        <div className='create'>
            <Header />
            <nav>
                <Link className='nav' to='/employee-list'>View Current Employees</Link>
            </nav>
            <div className='container'>
                <h2>Create Employee</h2>
                <EmployeeForm />
                <FormModal />
            </div>
        </div>
    )
}

export default CreateEmployee