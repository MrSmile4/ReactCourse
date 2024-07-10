import "./restaurant.css";
import { Counter } from "../counter";

export function Menu({ menu }) {
  return (
    <>
      <h3 className="blueLabel">Меню:</h3>
      <ul className="textGridWithGap">
        {menu.map((dish, index) => (
          <>
            <li className="textGrid">
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
