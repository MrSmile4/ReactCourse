import { RestTabButton } from "../rest-tab-button/rest-tab-button";
import styles from "./rest-tab-buttons.module.css";

export const RestTabButtons = ({ rests, setCurrentRest }) => {
  return (
    <div className={styles.restaurantButtons}>
      {rests.map((item) => (
        <RestTabButton
          key={item.id}
          id={item.id}
          name={item.name}
          action={() => setCurrentRest(item)}
        />
      ))}
    </div>
  );
};
