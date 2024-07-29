import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dish/getDishes",
  async (restaurantId, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);
