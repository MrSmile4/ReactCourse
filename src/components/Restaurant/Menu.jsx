import { Counter } from "../counter/counter";
import styles from "./restaurant.module.css";

export function Menu({ menu }) {
  return (
    <>
      <h3 className={styles.blueLabel}>Меню:</h3>
      <ul className={styles.textGridWithGap}>
        {menu.map((dish) => (
          <>
            <li className={styles.textGrid}>
              <span>Name: {dish.name}</span>
              <span>Price: {dish.price}</span>
              <span>
                Ingredients:{" "}
                {dish.ingredients.map((ing, i, ingredients) => {
                  return i === ingredients.length - 1 ? ing : ing + ", ";
                })}
              </span>
              <Counter />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
