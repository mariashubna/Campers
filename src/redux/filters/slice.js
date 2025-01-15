import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    params: {
      location: "",
      form: "",
      transmission: "",
      engine: "",
      kitchen: false,
      AC: false,
      bathroom: false,
      radio: false,
      microwave: false,
      TV: false,
      water: false,
      gas: false,
      refrigerator: false,
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.params = {
        ...state.params,
        ...action.payload,
      };
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
