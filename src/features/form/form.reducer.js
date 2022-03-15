const initialState = {
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
};

function formReducer(state = initialState, action) {
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
    case "formModal":
      return {
        ...state,
        formModal : !state.formModal
      };
    default:
      return state;
  }
}

export { formReducer };
