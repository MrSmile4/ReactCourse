import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock";

export const ReviewAuthorSlice = createSlice({
  name: "reviewAuthor",
  initialState: {
    entities: normalizedUsers.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedUsers.map((item) => item.id),
  },
  selectors: {
    selectReviewAuthorById: (state, id) => state.entities[id],
  },
});

export const { selectReviewAuthorById } = ReviewAuthorSlice.selectors;
