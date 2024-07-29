import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./Restaurant";
import { useEffect } from "react";
import { getRestaurants } from "../../../redux/etities/restaurant/get-restaurants";
import { selectRestaurantById } from "../../../redux/etities/restaurant/restaurant";

export function RestaurantContainer({ restId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <Restaurant
      key={restId}
      rest={restaurant}
    />
  );
}
