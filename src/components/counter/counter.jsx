import { useCount } from "../hooks/use-count";
import CustomButton from "../custom-button/custom-button";
import classNames from "classnames";
import styles from "./counter.module.css";

export const Counter = () => {
  const { count, decrement, increment } = useCount();

  return (
    <div className={styles.counter}>
      <CustomButton
        style={classNames(styles.button, styles.minusButton)}
        onClick={decrement}>
        -
      </CustomButton>
      {count}
      <CustomButton
        style={classNames(styles.button, styles.plusButton)}
        onClick={increment}>
        +
      </CustomButton>
    </div>
  );
};
