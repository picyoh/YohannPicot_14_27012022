import React, { useState } from 'react'
import { useStore, useSelector, useDispatch } from 'react-redux';

import { formInputs } from './dataFormat/formInputs'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

import { SelectUi } from '../selectUi/SelectUi'
import { department } from '../selectUi/dataFormat/department'
import { state } from '../selectUi/dataFormat/state'


import Error from '../../pages/Error'

function Inputs() {

    // Date params
    const employee = useSelector((state)=> state.form.employee)
    const [birthDay, changeBirth] = useState(new Date());
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
                            onChange={changeBirth}
                            value={birthDay}
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