import { configureStore } from "@reduxjs/toolkit";
import { DishSlice } from "./etities/dish/dish";
import { ReviewSlice } from "./etities/review/review";
import { UserSlice } from "./etities/user/user";
import { RestaurantSlice } from "./etities/restaurant/restaurant";
import { RequestSlice } from "./ui/request";

export const store = configureStore({
  reducer: {
    [RestaurantSlice.name]: RestaurantSlice.reducer,
    [DishSlice.name]: DishSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
    [RequestSlice.name]: RequestSlice.reducer,
  },
});
