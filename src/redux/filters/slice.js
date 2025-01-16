import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    params: {
      location: "",
      equipments: {
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
      type: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      const { category, name, value } = action.payload;

      if (category === "type") {
        state.params.type = value;
      } else if (category === "equipment") {
        state.params.equipments[name] = value;
      }
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
