import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result.concat({ type: "Review", restaurantId }),
    }),
    getUsers: builder.query({
      query: (userId) => ({
        url: "users",
        params: { userId },
      }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Review", restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
} = apiSlice;
