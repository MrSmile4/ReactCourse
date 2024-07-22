import { RestTabButtonContainer } from "../rest-tab-button/rest-tab-button-container";
import styles from "./rest-tab-buttons.module.css";

export const RestTabButtons = ({ restIds, setCurrentRestId }) => {
  return (
    <div className={styles.restaurantButtons}>
      {restIds.map((id) => (
        <RestTabButtonContainer
          key={id}
          id={id}
          action={setCurrentRestId}
        />
      ))}
    </div>
  );
};
