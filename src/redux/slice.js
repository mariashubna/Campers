import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamper } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selected: [],
    favorites: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(getCamper.pending, handlePending)
      .addCase(getCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selected = action.payload;
        console.log("Fetched camper by ID:", state.selected);
      })
      .addCase(getCamper.rejected, handleRejected);
  },
});

export default slice.reducer;
