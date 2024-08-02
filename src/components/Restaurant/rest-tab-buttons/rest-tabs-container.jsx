import { RestTabButtons } from "./rest-tab-buttons";
import { useEffect, useState } from "react";
import { useGetRestaurantsQuery } from "../../../redux/services/api";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestTabsContainer = () => {
  const [currentRest, setCurrentRest] = useState(undefined);

  const {
    data: restaurants,
    isError: restaurantsIsError,
    isFetching: restaurantsIsFetching,
    isLoading: restaurantsIsLoading,
  } = useGetRestaurantsQuery();

  useEffect(() => {
    if (restaurants) setCurrentRest(restaurants[0]);
  }, [restaurants]);

  if (restaurantsIsFetching || restaurantsIsLoading) {
    return "Loading";
  }

  if (restaurantsIsError) {
    return "Error";
  }

  return (
    <>
      <RestTabButtons
        rests={restaurants}
        setCurrentRest={setCurrentRest}
      />
      {currentRest && <RestaurantContainer rest={currentRest} />}
    </>
  );
};
