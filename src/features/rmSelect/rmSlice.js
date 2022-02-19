import { createSlice } from "@reduxjs/toolkit";

export const rmSlice = createSlice({
  name: "rmSelect",
  initialState: {
    datas: [],
    lastIndex: -1,
  },
  reducers: {
    rmSet: (state, action) => {
        state.datas.push(action.payload);
    },
    setIndex: (state) => {
      state.lastIndex++
    }
  },
});

export const { rmSet, setIndex } = rmSlice.actions;

export default rmSlice.reducer;
