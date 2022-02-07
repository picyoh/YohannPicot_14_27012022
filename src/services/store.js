import { createStore } from 'redux'

// state
const initialState = {
    date: null,
    data: null
}

// action creators
const setDate = (date) => ({
    type: "date",
    payload: date
});

// reducer
function reducer(state, action) {
    if (action.type === "datas") {
        return state;
    }
    if (action.type === "date") {
        return {
            ...state,
            date: action.payload
        }
    }
    return state;
}

// store
const store = createStore(reducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setDate };