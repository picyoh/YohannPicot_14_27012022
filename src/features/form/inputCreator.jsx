import React from 'react'

import { formFormat } from './datasFormat/formFormat'


function Input(){
    const form = formFormat;
    form.forEach(input => {
        if(input.type === "input"){
            console.log("input")
        }
    })
    return(
        <div>Input</div>
    )
}

export default Input