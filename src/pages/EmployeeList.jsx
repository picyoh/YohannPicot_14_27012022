import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-redux-table';

import { useSelector } from 'react-redux'

import { headArray } from '../features/table/dataFormat/tableHead'

function EmployeeList() {
  // get datas
  const employeesDatas = useSelector((state) => state.datas.employee);
  console.log(employeesDatas)

  return (
    <div id='employee-div' className='container'>
      <Table
        headersArray={headArray}
        rowsContent={employeesDatas}
        title="Current Employees"
        filter={true}
        entriesSelector={[10, 100]}
        showEntries={true}
        hideButtons={false}
      />
      <Link to='/'>Home</Link>
    </div>
  )
}

export default EmployeeList