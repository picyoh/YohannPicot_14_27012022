import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    datas: [],
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
    modal: false,
  },
  reducers: {
    setDatas: (state, action) => {
      state.datas.push(action.payload);
    },
    getForm: (state, action) => {
      const { category, value } = action.payload;
      switch (category) {
        case "firstName":
          state.currentEmployee.firstName = value;
          break;
        case "lastName":
          state.currentEmployee.lastName = value;
          break;
        case "dateOfBirth":
          state.currentEmployee.dateOfBirth = value;
          break;
        case "startDate":
          state.currentEmployee.startDate = value;
          break;
        case "street":
          state.currentEmployee.street = value;
          break;
        case "city":
          state.currentEmployee.city = value;
          break;
        case "state":
          state.currentEmployee.state = value;
          break;
        case "zipCode":
          state.currentEmployee.zipCode = value;
          break;
        case "department":
          state.currentEmployee.department = value;
          break;

        default:
          return state;
      }
    },
    setModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { setDatas, setModal, getForm } = formSlice.actions;

export default formSlice.reducer;
