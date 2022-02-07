import React from 'react';
import { Link } from 'react-router-dom';
import { rrtableReducer } from 'react-redux-table';

function Current(){
    return(
        <div id='employee-div' className='container'>
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Current