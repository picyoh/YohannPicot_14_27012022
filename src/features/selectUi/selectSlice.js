import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    datas: [],
  },
  reducers: {
    selectSet: (state, action) => {
      state.datas.push(action.payload);
    },
  }
});

export const { selectSet } = selectSlice.actions;

export default selectSlice.reducer;
