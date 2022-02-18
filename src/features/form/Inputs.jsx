import React from 'react'

import { formInputs } from './dataFormat/formInputs'

import Error from '../../pages/Error'
import Date from '../date/Date'

import { SelectUi } from '../selectUi/SelectUi'
import { department } from '../selectUi/dataFormat/department'
import { state } from '../selectUi/dataFormat/state'

function Inputs() {

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