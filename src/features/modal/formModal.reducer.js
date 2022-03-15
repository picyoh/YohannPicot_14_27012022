const initialState = {
  isOpen: false,
};

function formModalReducer(state = initialState, action) {
  if (action.type === "formModal") {
    return {
      ...state,
      isOpen: action.payload,
    };
  }
  return state;
}

export { formModalReducer };
