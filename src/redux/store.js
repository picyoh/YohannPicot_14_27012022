import { createStore, combineReducers } from "redux";
import { datasReducer } from "../features/table/datas.reducer";
import { formReducer } from "../features/form/form.reducer";
import { formModalReducer } from "../features/modal/formModal.reducer";
import { rrtableReducer } from "react-redux-table";

const rootReducer = combineReducers({
  datas: datasReducer,
  currentEmployee: formReducer,
  formModal: formModalReducer,
  rrtable: rrtableReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// store
const store = createStore(rootReducer, reduxDevtools);

export { store };
