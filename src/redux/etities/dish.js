import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock";

export const DishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedDishes.map((item) => item.id),
  },
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = DishSlice.selectors;
