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
    openFavorite: (state) => {
      state.isOpen = true;
    },
    closeFavorite: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addFavorite, removeFavorite, openFavorite, closeFavorite } =
  slice.actions;
export default slice.reducer;
