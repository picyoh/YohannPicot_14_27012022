import React from 'react'

function SelectUi(props) {
    const {name, options} = props;
    const upperName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <label htmlFor={name}>{upperName}</label>
            <select name={name} id={name}>
                {options.map((option, index) => {
                    let optionName;
                    (option.name === undefined) ?
                    (optionName = option):
                    (optionName = option.name);

                    return <option key={index}>{optionName}</option>
                })}
            </select>
        </>
    )
}

export { SelectUi }