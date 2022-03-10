import React, {useState} from 'react'

import { formInputs } from './dataFormat/formInputs'

import Error from '../../pages/Error'

import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

// import  RmSelect  from 'react-mini-select'

function Inputs() {

    const minimumYear = new Date().getFullYear() - 13;
    const [birthDay, changeBirth] = useState(new Date().setFullYear(minimumYear));
    const [startDay, changeStart] = useState(new Date());

    const dateValue = (name) => {
        if (name === 'dateOfBirth') return birthDay;
        if (name === 'startDate') return startDay;
    }

    const changeDate = (name) => {
        if (name === 'dateOfBirth') return changeBirth;
        if (name === 'startDate') return changeStart;
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
                return (
                    <div className='inputWrap' key={index}>
                        <label htmlFor={input.name}>{input.title}</label>
                        <Datetime
                            inputProps={{ id: input.name }}
                            timeFormat={false}
                            onChange={changeDate}
                            value={dateValue(input.name)}
                        />
                    </div>
                )
            }
            if (input.type === 'select') {
                return (
                    <div className='inputWrap' key={index}>
                        {/* <RmSelect
                            name={input.name}
                        /> */}
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