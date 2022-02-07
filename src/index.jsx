import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './services/store'

import './index.css'

import Create from './pages/CreateEmployee'
import Current from './pages/CurrentEmployees'
import Error from './layouts/Error'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/employee-list' element={<Current />} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<Navigate to='/error' />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

