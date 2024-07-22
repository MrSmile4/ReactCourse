import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/etities/dish";
import { Menu } from "./menu";

export function MenuContainer({ menuId }) {
  const dish = useSelector((state) => selectDishById(state, menuId));

  if (!dish) {
    return null;
  }

  return <Menu menu={dish} />;
}
