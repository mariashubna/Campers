import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (param, thunkAPI) => {
    const state = thunkAPI.getState();
    const page = state.campers.page || 1;
    const limit = 10;

    const params = { page, limit, ...param };

    try {
      const { data } = await axios.get("campers", { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamper = createAsyncThunk(
  "camperId/fetchAll",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
