import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../campers/operations";

const slice = createSlice({
  name: "filters",
  initialState: {
    items: {},
    isFiltered: false,
  },
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;
      state.items[name] = value;
    },
    changeIsFiltered: (state) => {
      state.isFiltered = true;
    },
    resetFilter: (state) => {
      state.items = {};
      state.isFiltered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state) => {
        state.items = {};
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.items = {};
      });
  },
});

export const { changeFilter, resetFilter, changeIsFiltered } = slice.actions;
export default slice.reducer;
