import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import { Provider } from 'react-redux'
import { store } from './store'

import './index.css'

import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import Error from './pages/Error'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/employee-list' element={<EmployeeList />} />
          <Route path='/error' element={<Error />} />
          {/* <Route path='/*' element={<Navigate to='/error' />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

