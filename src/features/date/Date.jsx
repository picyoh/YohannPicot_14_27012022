import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getForm } from '../form/formSlice';

import { initDate, formatDate } from '../date/dateHandler'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

function Date(props) {
    const input = props;
    const inputName = input.name;
    // console.log(input)

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
    return (
        <>
            <label htmlFor={input.name}>{input.title}</label>
            <Datetime
                inputProps={{ id: inputName }}
                timeFormat={false}
                onChange={changeDate}
                value={dateValue(inputName)}
            />
        </>
    )
}

export default Date