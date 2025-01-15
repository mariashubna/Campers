import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchFilteredCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const {
      location,
      form,
      transmission,
      engine,
      kitchen,
      AC,
      bathroom,
      radio,
      microwave,
      TV,
      water,
      gas,
      refrigerator,
    } = state.filters;

    const params = {};
    if (location) params.location = location;
    if (form) params.form = form;
    if (transmission) params.transmission = transmission;
    if (engine) params.engine = engine;
    if (kitchen) params.kitchen = kitchen;
    if (AC) params.AC = AC;
    if (bathroom) params.bathroom = bathroom;
    if (radio) params.radio = radio;
    if (microwave) params.microwave = microwave;
    if (TV) params.TV = TV;
    if (water) params.water = water;
    if (gas) params.gas = gas;
    if (refrigerator) params.refrigerator = refrigerator;

    try {
      const response = await axios.get("/campers", { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
