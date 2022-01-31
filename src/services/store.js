import { createStore } from 'react-redux'

// state
const initialState = {
    data: null,
}

// action creators

const setDatas = (datas) => ({
    type: "datas",
    payload: {name: datas.name}
});

// reducer

function reducer(state, action) {
    if (action.type === "datas") {
        return state;
    }
    return state;
}

// store
const store = createStore(reducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setDatas };