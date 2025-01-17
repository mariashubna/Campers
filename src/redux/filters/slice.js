import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../campers/operations";

const slice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;
      state.initialState[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state) => {
      state.initialState = {};
    });
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
