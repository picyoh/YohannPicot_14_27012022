import { setDatas } from "../actions/actions";

const initialState = {
  datas: [],
};

function datasReducer(state = initialState, action) {
  if (action.type === "setDatas") {
    return [...state, action.payload];
  }
  return state;
}

export { datasReducer };
