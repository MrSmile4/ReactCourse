import { RestTabButtons } from "./rest-tab-buttons";
import { useEffect, useState } from "react";
import {
  useCreateReviewMutation,
  useGetDishesByRestaurantIdQuery,
  useGetRestaurantsQuery,
  useGetReviewsByRestaurantIdQuery,
} from "../../../redux/services/api";
import { Restaurant } from "../restaurant/Restaurant";

export const RestTabsContainer = () => {
  const [currentRest, setCurrentRest] = useState(undefined);

  const {
    data: restaurants,
    isError: restaurantsIsError,
    isFetching: restaurantsIsFetching,
    isLoading: restaurantsIsLoading,
  } = useGetRestaurantsQuery();

  const {
    data: dishes,
    isError: dishesIsError,
    isFetching: dishesIsFetching,
    isLoading: dishesIsLoading,
  } = useGetDishesByRestaurantIdQuery(currentRest?.id);

  const {
    data: reviews,
    isError: reviewsIsError,
    isFetching: reviewsIsFetching,
    isLoading: reviewsIsLoading,
  } = useGetReviewsByRestaurantIdQuery(currentRest?.id);

  const [createReview] = useCreateReviewMutation();

  useEffect(() => {
    if (restaurants) setCurrentRest(restaurants[0]);
  }, [restaurants]);

  if (
    restaurantsIsFetching ||
    restaurantsIsLoading ||
    dishesIsFetching ||
    dishesIsLoading ||
    reviewsIsFetching ||
    reviewsIsLoading
  ) {
    return "Loading";
  }

  if (restaurantsIsError || dishesIsError || reviewsIsError) {
    return "Error";
  }

  return (
    <>
      <RestTabButtons
        rests={restaurants}
        setCurrentRest={setCurrentRest}
      />
      <Restaurant
        name={currentRest?.name}
        menu={dishes}
        reviews={reviews}
        onCreateReview={(review) =>
          createReview({ review, restaurantId: currentRest.id })
        }
      />
    </>
  );
};
