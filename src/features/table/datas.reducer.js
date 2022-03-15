import { mockedRows } from "./mockedDatas/mockedTable";

const initialState = {
  employee: mockedRows,
};

function datasReducer(state = initialState, action) {
  if (action.type === "setDatas") {
    return { ...state, employee: [...state.employee, action.payload] };
  }
  return state;
}

export { datasReducer };
