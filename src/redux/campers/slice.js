import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchFilteredCampers, getCamper } from "./operations";

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
    selected: null,
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
      })
      .addCase(getCamper.rejected, handleRejected)
      .addCase(fetchFilteredCampers.pending, handlePending)
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchFilteredCampers.rejected, handleRejected);
  },
});

export default slice.reducer;
