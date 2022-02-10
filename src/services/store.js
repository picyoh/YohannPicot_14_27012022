import { createStore, combineReducers } from "redux";
import { rrtableReducer } from "react-redux-table";

// state
const initialState = {
  datas: [],
  rrtable: true,
};

// action creators
const setDatas = (value) => {
  return {
    type: "setDatas",
    payload: value,
  };
};

const getForm = (value, category) => {
  return {
    type: "getForm",
    payload: value,
    category: category,
  };
};

// reducer
function datasReducer(state = initialState, action) {
  if (action.type === "setDatas") {
      return[
          ...state,
          action.payload
      ]
  }
  if (action.type === "getForm") {
    console.log(action.category);
    switch (action.category) {
      case "first-name":
        return { ...state, firstName: action.payload };
      case "last-name":
        return { ...state, lastName: action.payload };
      case "date-of-birth":
        return { ...state, dateOfBirth: action.payload };
      case "start-date":
        return { ...state, startDate: action.payload };
      case "street":
        return { ...state, street: action.payload };
      case "city":
        return { ...state, city: action.payload };
      case "state":
        return { ...state, state: action.payload };
      case "zip-code":
        return { ...state, zipCode: action.payload };
      case "department":
        return { ...state, department: action.payload };
      default:
        return state;
    }
  }
  return state;
}

const rootReducer = combineReducers({
  datas: datasReducer,
  rrtable: rrtableReducer,
});

// store
const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setDatas };
