import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./Restaurant";
import { selectRestaurantById } from "../../../redux/etities/restaurant/restaurant";
import { useEffect } from "react";
import { getDishes } from "../../../redux/etities/dish/get-dishes";
import { getReviews } from "../../../redux/etities/review/get-reviews";
import { getUsers } from "../../../redux/etities/user/get-user";

export function RestaurantContainer({ restId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (restId) {
      dispatch(getDishes(restId));
    }
  }, [dispatch, restId]);

  useEffect(() => {
    if (restId) {
      dispatch(getReviews(restId));
    }
  }, [dispatch, restId]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Restaurant
      key={restId}
      rest={restaurant}
    />
  );
}
