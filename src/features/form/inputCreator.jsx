import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { getForm } from './formSlice';

import { formInputs } from './dataFormat/formInputs'
import { initDate, formatDate } from './dateHandler'


import Error from '../../pages/Error'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

import { SelectUi } from '../selectUi/SelectUi'
import { department } from '../selectUi/dataFormat/department'
import { state } from '../selectUi/dataFormat/state'

function Inputs() {
    const dispatch = useDispatch();
    // Date params from redux store
    const startDate = useSelector((state) => state.form.currentEmployee.startDate);
    const dateOfBirth = useSelector((state) => state.form.currentEmployee.dateOfBirth);
    // date value selector
    const dateValue = (inputName) => {
        if (inputName === "startDate") {
            return startDate;
        }
        if (inputName === "dateOfBirth") {
            return dateOfBirth;
        }
    }
    // set intial date values
    if (startDate === "") {
        const initDateObj = initDate();
        initDateObj.forEach(obj => {
            dispatch(getForm({ category: obj.category, value: obj.value }))
        })
    }
    // date event handler
    const changeDate = (e) => {
        console.log(e, e._d, e._i);
        if (e._i === startDate) {
            const formatedDate = formatDate(e._d, "startDate")
            dispatch(getForm({ category: 'startDate', value: formatedDate }))
        }
        if (e._i === dateOfBirth) {
            const minimalDate = formatDate(e._d, "dateOfBirth")
            dispatch(getForm({ category: 'dateOfBirth', value: minimalDate }))
        }
    }

    // Select params
    const options = (name) => {
        if (name === "state") return state;
        if (name === "department") return department;
    }

    return (
        formInputs.map((input, index) => {
            if (input.type === 'input') {
                return (
                    <div className='inputWrap' key={index}>
                        <label htmlFor={input.name}>{input.title}</label>
                        <input type='text' id={input.name} />
                    </div>
                )
            }
            if (input.type === 'date') {
                const inputName = input.name;
                return (
                    <div className='inputWrap' key={index}>
                        <label htmlFor={input.name}>{input.title}</label>
                        <Datetime
                            inputProps={{ id: inputName }}
                            timeFormat={false}
                            onChange={changeDate}
                            value={dateValue(inputName)}
                        />
                    </div>
                )
            }
            if (input.type === 'select') {

                return (
                    <div className='inputWrap' key={index}>
                        <SelectUi
                            name={input.name}
                            options={options(input.name)}
                        />
                    </div>
                )
            }
            else {
                return <Error />
            }
        })
    )
}

export default Inputs