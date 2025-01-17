import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
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
  },
});

export const { addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
