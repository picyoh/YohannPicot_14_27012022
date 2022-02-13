import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import EmployeeForm from '../features/form/EmployeeForm'
import Modal from '../features/Modal'

function CreateEmployee() {
    const modalIsOpen = useSelector((state) => state.modal)
    return (
        <div className='create'>
            <Header />
            <div className='container'>
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <EmployeeForm />
                {modalIsOpen && 
                <Modal />
                }
            </div>
        </div>
    )
}

export default CreateEmployee