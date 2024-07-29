import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";
import { getRestaurants } from "./get-restaurants";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
    requstStatus: "idle",
  },
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getRestaurants.pending, (state) => {
        state.requstStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state) => {
        state.requstStatus = "fulfilled";
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requstStatus = "rejected";
      });
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  RestaurantSlice.selectors;
