import { createStore, combineReducers } from "redux";
import { rrtableReducer } from "react-redux-table";
import { mockedRows } from "./features/table/mockedDatas/mockedTable";

// state
const initialState = {
  datas: mockedRows,
  currentEmployee: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  },
  formModal: false,
  rmSelect: [],
  rrtable: true,
};

// action creators
const setDatas = (datas) => {
  return {
    type: "setDatas",
    payload: datas,
  };
};

const getForm = (value, category) => {
  return {
    type: "getForm",
    payload: value,
    category: category,
  };
};

const setFormModal = () => {
  return {
    type: "formModal",
  };
};

// reducer
function datasReducer(state = mockedRows, action) {
  if (action.type === "setDatas") {
    return [...state, action.payload];
  }
  return state;
}

function formReducer(state = {}, action) {
  switch (action.type) {
    case "getForm":
      switch (action.category) {
        case "firstName":
          return { ...state, firstName: action.payload };
        case "lastName":
          return { ...state, lastName: action.payload };
        case "dateOfBirth":
          return { ...state, dateOfBirth: action.payload };
        case "startDate":
          return { ...state, startDate: action.payload };
        case "street":
          return { ...state, street: action.payload };
        case "city":
          return { ...state, city: action.payload };
        case "state":
          return { ...state, state: action.payload };
        case "zipCode":
          return { ...state, zipCode: action.payload };
        case "department":
          return { ...state, department: action.payload };
        default:
          return state;
      }
    default:
      return state;
  }
}

function modalReducer(state = false, action) {
  if (action.type === "formModal") {
    return !state;
  }
  return state;
}

const rmSet = (obj) => {
  return {
    type: "rmSelect",
    payload: obj,
  };
};

function rmSelectReducer(state = [], action) {
  if (action.type === "rmSelect") {
    if(state.findIndex(select => select.name === action.payload.name) === -1){
      return [...state, action.payload];
    }
  }
  return state;
}

const rootReducer = combineReducers({
  datas: datasReducer,
  currentEmployee: formReducer,
  formModal: modalReducer,
  rmSelect: rmSelectReducer,
  rrtable: rrtableReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// store
const store = createStore(rootReducer, initialState, reduxDevtools);

export { store, setDatas, getForm, setFormModal, rmSet };
