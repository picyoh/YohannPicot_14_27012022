import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    datas: [],
  },
  reducers: {
    getDatas: (state, action) => {
      state.datas.push(action.payload);
    },
  }
});

export const { getDatas } = selectSlice.actions;

export default selectSlice.reducer;
