import { createStore, combineReducers } from 'redux';
import { rrtableReducer } from 'react-redux-table';

// state
const initialState = {
    datas: null,
    form: null,
    rrtable: true
}

// action creators
const getDatas = (form) =>{
    return {
        type: "form",
        payload: form
    }
}

const getForm = (form) =>{
    return {
        type: "form",
        payload: form
    }
}

// reducer
function datasReducer(state = null, action) {
    if (action.type === "datas") {
        return {
            ...state,
            datas: action.payload
        }
    }
    return state;
}

const rootReducer = combineReducers({
    datas: datasReducer,
    rrtable: rrtableReducer,
})

// store
const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setDatas };