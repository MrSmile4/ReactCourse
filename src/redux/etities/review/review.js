import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (bulder) => {
    bulder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    });
  },
});

export const { selectReviewById } = ReviewSlice.selectors;
