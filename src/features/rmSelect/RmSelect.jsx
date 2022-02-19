import React from 'react'
import { useStore, useSelector, useDispatch } from 'react-redux'
import { setIndex } from './rmSlice'

function RmSelect(props) {
    const { name } = props;

    // get datas from store
    const rmSelector = useSelector((state) => state.rmSelect.datas);
    
    const store = useStore();
    const lastindex = store.getState().rmSelect.lastIndex;
    const lastIndex = useSelector((state) => state.rmSelect.lastIndex)
    
    // get select index in store
    const index = rmSelector.findIndex((data) => data.name === name);
    console.log({"index":index, "lastI": lastIndex, "lasti": lastindex})

    const options = rmSelector[index].options;

    // get title or create one
    let title = rmSelector[index].title
    if (rmSelector[index].title === undefined) {
        title = name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <>
            <label htmlFor={name}>{title}</label>
            <select name={name} id={name}>
                {options.map((option, index) => {
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