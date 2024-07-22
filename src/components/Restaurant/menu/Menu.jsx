import { Counter } from "../../counter/counter";
import { useUser } from "../../user-context/user-context";
import styles from "./menu.module.css";

export function Menu({ menu }) {
  const { value: user } = useUser();

  const { name, price, ingredients } = menu;

  return (
    <li className={styles.menuTextGrid}>
      <span>Name: {name}</span>
      <span>Price: {price}</span>
      <span>
        Ingredients:{" "}
        {ingredients.map((ing, i, ingredients) => {
          return i === ingredients.length - 1 ? ing : ing + ", ";
        })}
      </span>
      {user ? <Counter /> : null}
    </li>
  );
}
