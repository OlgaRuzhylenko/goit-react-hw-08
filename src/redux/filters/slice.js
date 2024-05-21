import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
    number: '',
  },

  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changeNumberFilter(state, action) {
      state.number = action.payload;
    },
  },
});
export const { changeNameFilter, changeNumberFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

