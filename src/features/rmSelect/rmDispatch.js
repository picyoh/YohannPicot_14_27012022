import {store} from '../../store'
import {rmSet, setIndex} from './rmSlice'

function rmDispatch(name, options, title){
    const datas = store.getState().rmSelect.datas
    const test = datas.findIndex(data => data.name === name) 

    if(test === -1){
        if(title){
            store.dispatch(rmSet({name: name, options: options, title: title}));
        } else {
            store.dispatch(rmSet({name: name, options: options}));
        }
        store.dispatch(setIndex())
    }
}

export {rmDispatch}