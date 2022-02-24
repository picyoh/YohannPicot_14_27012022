import React from 'react'
import { useSelector } from 'react-redux'

function RmSelect(props) {
    const { name, options, title } = props;
    let optionsDatas;
    let label;
    // get datas from store
    const rmSelector = useSelector((state) => state.rmSelect);

    // Options dispatched
    if (options === undefined) {
        // get select index in store
        const index = rmSelector.findIndex((data) => data.name === name);
        // get options form index
        optionsDatas = rmSelector[index].options;
        // get title or create one
        if (rmSelector[index].title === undefined) {
            label = name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
    // Options passed to props
    else {
        optionsDatas = options;
        if (title === undefined) {
            label = name.charAt(0).toUpperCase() + name.slice(1);
        }
        // title passed to props 
        else {
            label = title;
        }
    }

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                {optionsDatas.map((option, index) => {
                    let optionName;
                    (option.name === undefined) ?
                        (optionName = option) :
                        (optionName = option.name);

                    return <option key={index}>{optionName}</option>
                })}
            </select>
        </>
    )
}

export { RmSelect }