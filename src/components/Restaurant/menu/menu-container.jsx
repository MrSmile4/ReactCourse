import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/etities/dish/dish";
import { Menu } from "./menu";

export function MenuContainer({ dishId }) {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <Menu menu={dish} />;
}
