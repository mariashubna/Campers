import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
    openCloseFavorite: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addFavorite, removeFavorite, openCloseFavorite } = slice.actions;
export default slice.reducer;
