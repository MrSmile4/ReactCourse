import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-user";

const entityAdapter = createEntityAdapter();

export const UserSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (bulder) => {
    bulder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    });
  },
});

export const { selectUserById } = UserSlice.selectors;
