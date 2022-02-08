import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-redux-table';
import { rowsContent } from '../services/mockedTable'

function Current() {

  const headArray = [
    { title: "First Name", category: "firstName" },
    { title: "Last Name", category: "lastName" },
    { title: "Start Date", category: "startDate" },
    { title: "department", category: "department" },
    { title: "Date of Birth", category: "birthDay" },
    { title: "Street", category: "street" },
    { title: "City", category: "city" },
    { title: "State", category: "state" },
    { title: "Zip Code", category: "zipCode" }
  ];

  return (
    <div id='employee-div' className='container'>
      <Table headersArray={headArray} rowsContent={rowsContent} />
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Current