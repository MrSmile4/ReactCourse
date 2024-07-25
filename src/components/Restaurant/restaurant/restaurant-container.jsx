import { useSelector } from "react-redux";
import { Restaurant } from "./Restaurant";
import { selectRestaurantById } from "../../../redux/etities/restaurant";

export function RestaurantContainer({ restId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restId)
  );

  return (
    <Restaurant
      key={restId}
      rest={restaurant}
    />
  );
}
