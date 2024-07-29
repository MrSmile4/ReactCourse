import { createSlice } from "@reduxjs/toolkit";

export const RequestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("pending"),
        (state, { meta }) => {
          state[meta.requestId] = "pending";
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = "fulfilled";
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("rejected"),
        (state, { meta }) => {
          state[meta.requestId] = "rejected";
        }
      ),
  selectors: {
    selectRequestStatusById: (state, id) => {
      return state[id] || "idle";
    },
  },
});

export const { selectRequestStatusById } = RequestSlice.selectors;
