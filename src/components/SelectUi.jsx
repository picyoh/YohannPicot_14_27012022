import React from 'react'

function SelectUi(props) {
    const { name, options } = props;
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <select name={name} id={name}>
                {options.map((option, index) => {
                    return <option key={index}>{option.name}</option>
                })}
            </select>
        </>
    )
}

export { SelectUi }