import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-redux-table';

import { useStore, useSelector } from 'react-redux'
import { setDatas } from '../services/store'

import { rowsContent } from '../services/mockedTable'

function EmployeeList() {
  // get datas

  const headArray = [
    { title: "First Name", category: "first-name" },
    { title: "Last Name", category: "last-name" },
    { title: "Start Date", category: "start-date" },
    { title: "department", category: "department" },
    { title: "Date of Birth", category: "date-of-birth" },
    { title: "Street", category: "street" },
    { title: "City", category: "city" },
    { title: "State", category: "state" },
    { title: "Zip Code", category: "zip-code" }
  ];

  const store = useStore();
  const employeeDatas = useSelector((state) => state.datas);
  if(employeeDatas.length < 2){
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