import { useCount } from "../hooks/use-count";
import classNames from "classnames";
import styles from "./counter.module.css";

export const Counter = () => {
  const { count, decrement, increment } = useCount();

  return (
    <div className={styles.counter}>
      <button
        className={classNames(styles.button, styles.minusButton)}
        onClick={decrement}>
        -
      </button>
      {count}
      <button
        className={classNames(styles.button, styles.plusButton)}
        onClick={increment}>
        +
      </button>
    </div>
  );
};
