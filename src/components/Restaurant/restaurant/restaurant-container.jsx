import { Restaurant } from "./Restaurant";
import {
  useCreateReviewMutation,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
} from "../../../redux/services/api";

export function RestaurantContainer({ rest }) {
  const {
    data: dishes,
    isError: dishesIsError,
    isFetching: dishesIsFetching,
    isLoading: dishesIsLoading,
  } = useGetDishesByRestaurantIdQuery(rest?.id);

  const {
    data: reviews,
    isError: reviewsIsError,
    isFetching: reviewsIsFetching,
    isLoading: reviewsIsLoading,
  } = useGetReviewsByRestaurantIdQuery(rest?.id);

  const [createReview] = useCreateReviewMutation();

  if (
    dishesIsFetching ||
    dishesIsLoading ||
    reviewsIsFetching ||
    reviewsIsLoading
  ) {
    return "Loading";
  }

  if (dishesIsError || reviewsIsError) {
    return "Error";
  }

  return (
    <Restaurant
      name={rest?.name}
      menu={dishes}
      reviews={reviews}
      onCreateReview={(review) =>
        createReview({ review, restaurantId: rest.id })
      }
    />
  );
}
