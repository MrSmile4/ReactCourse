import { useSelector } from "react-redux";
import { RestTabButtons } from "./rest-tab-buttons";
import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { selectRestaurantsIds } from "../../../redux/etities/restaurant/restaurant";
import { getRestaurants } from "../../../redux/etities/restaurant/get-restaurants";
import { useRequest } from "../../../hooks/use-request";

export const RestTabsContainer = () => {
  const [currentRestId, setCurrentRestId] = useState(undefined);

  const restIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    if (restIds?.length) setCurrentRestId(restIds[0]);
  }, [restIds]);

  const restaurantsRequestStatus = useRequest(getRestaurants);

  const isLoading =
    restaurantsRequestStatus === "pending" ||
    restaurantsRequestStatus === "idle";

  if (isLoading) {
    return "Loading";
  }

  if (!restIds?.length) {
    return null;
  }

  return (
    <>
      <RestTabButtons
        restIds={restIds}
        setCurrentRestId={setCurrentRestId}
      />
      <RestaurantContainer restId={currentRestId} />
    </>
  );
};
