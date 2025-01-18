import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamper } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
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
    limit: 10,
    total: null,
    loading: false,
    error: null,
    selected: null,
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    cleanItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const uniqueItems = action.payload.items.filter(
          (newItem) =>
            !state.items.some((existingItem) => existingItem.id === newItem.id)
        );

        state.items = [...state.items, ...uniqueItems];
        state.total = action.payload.total;
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

export const { changePage, cleanItems } = slice.actions;
export default slice.reducer;
