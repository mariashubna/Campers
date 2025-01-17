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
    page: 1,
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
      .addCase(getCamper.rejected, handleRejected);
  },
});

export default slice.reducer;
