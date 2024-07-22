import { useSelector } from "react-redux";
import { RestTabButton } from "./rest-tab-button";
import { selectRestaurantById } from "../../../redux/etities/restaurant";

export const RestTabButtonContainer = ({ id, action }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <RestTabButton
      id={id}
      name={restaurant.name}
      action={action}
    />
  );
};
