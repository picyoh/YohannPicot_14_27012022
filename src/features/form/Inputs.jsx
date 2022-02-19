import React from 'react'

import { formInputs } from './dataFormat/formInputs'

import Error from '../../pages/Error'
import Date from '../date/Date'

import { RmSelect } from '../rmSelect/RmSelect'
import { rmDispatch } from '../rmSelect/rmDispatch'
import { department } from '../rmSelect/dataFormat/department'
import { state } from '../rmSelect/dataFormat/state'

function Inputs() {

    // Select options params
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
                return (
                    <div className='inputWrap' key={index}>
                        <Date
                            title={input.title}
                            name={input.name}
                        />
                    </div>
                )
            }
            if (input.type === 'select') {
                rmDispatch(input.name, options(input.name));
                return (
                    <div className='inputWrap' key={index}>
                        <RmSelect
                            name={input.name}
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