import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../../redux/etities/restaurant";
import { RestTabButtons } from "./rest-tab-buttons";
import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestTabsContainer = () => {
  const [currentRestId, setCurrentRestId] = useState(undefined);

  const restIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    setCurrentRestId(restIds[0]);
  }, []);

  if (!restIds.length) {
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
