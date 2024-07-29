import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/etities/dish";
import { Menu } from "./Menu";

export function MenuContainer({ dishId }) {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <Menu menu={dish} />;
}
