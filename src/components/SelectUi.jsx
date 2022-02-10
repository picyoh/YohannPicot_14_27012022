import React from 'react'

function SelectUi(props) {
    const { name, options } = props;
    const upperName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <label htmlFor={name}>{upperName}</label>
            <select name={name} id={name}>
                {options.map((option, index) => {
                    return <option key={index}>{option.name}</option>
                })}
            </select>
        </>
    )
}

export { SelectUi }