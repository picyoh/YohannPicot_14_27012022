import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-redux-table';

import { useStore, useSelector } from 'react-redux'
import { setDatas } from '../features/form/employeeSlice'

import { headArray } from '../features/table/dataFormat/tableHead'

import { rowsContent } from '../mockedDatas/mockedTable'

function EmployeeList() {
  // get datas
  const store = useStore();
  const employeeDatas = useSelector((state) => state.employee.datas);
  // load mocked data
  if (employeeDatas.length < 2) {
    rowsContent.forEach(row => {
      store.dispatch(setDatas(row))
    })
  }

  return (
    <div id='employee-div' className='container'>
      <Table
        headersArray={headArray}
        rowsContent={employeeDatas}
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