import { useCount } from "../hooks/use-count";
import { CustomButton } from "../custom-button/custom-button";
import { useUser } from "../user-context/user-context";
import styles from "./counter.module.css";

export function Counter() {
  const { count, decrement, increment, clear } = useCount();

  const { value: user } = useUser();

  if (user === undefined) {
    count !== 0 ? clear() : null;
    return null;
  }

  return (
    <div className={styles.counter}>
      <CustomButton
        colorViewVariant={"blue"}
        onClick={decrement}>
        -
      </CustomButton>
      {count}
      <CustomButton
        colorViewVariant={"red"}
        onClick={increment}>
        +
      </CustomButton>
    </div>
  );
}
