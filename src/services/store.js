import { createStore, combineReducers } from 'redux';
import { rrtableReducer } from 'react-redux-table';

// state
const initialState = {
    datas: null,
    rrtable: true,
}

// action creators
const setDatas = (datas) => ({
    type: "datas",
    payload: datas
});

// reducer
function reducer(state = null, action) {
    if (action.type === "datas") {
        return {
            ...state,
            datas: action.payload
        }
    }
    return state;
}
const rootReducer = combineReducers({
    datas: reducer,
    rrtable: rrtableReducer,
})
// store
const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setDatas };