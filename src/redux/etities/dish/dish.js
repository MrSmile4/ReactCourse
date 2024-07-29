import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (bulder) => {
    bulder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    });
  },
});

export const { selectDishById } = DishSlice.selectors;
