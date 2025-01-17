import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../campers/operations";

const initialState = {
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
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, () => {
      return initialState;
    });
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
