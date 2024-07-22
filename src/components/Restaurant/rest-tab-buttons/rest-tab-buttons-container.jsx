import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../../redux/etities/restaurant";
import { RestTabButtons } from "./rest-tab-buttons";
import { useEffect } from "react";

export const RestTabButtonsContainer = ({ setCurrentRestId }) => {
  const restIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    setCurrentRestId(restIds[0]);
  }, []);

  if (!restIds.length) {
    return null;
  }

  return (
    <RestTabButtons
      restIds={restIds}
      setCurrentRestId={setCurrentRestId}
    />
  );
};
