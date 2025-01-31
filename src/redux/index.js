import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./etities/restaurant";
import { DishSlice } from "./etities/dish";
import { ReviewSlice } from "./etities/review";
import { UserSlice } from "./etities/user";

export const store = configureStore({
  reducer: {
    [RestaurantSlice.name]: RestaurantSlice.reducer,
    [DishSlice.name]: DishSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
  },
});
