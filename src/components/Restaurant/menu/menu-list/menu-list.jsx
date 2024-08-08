import { TitleLabel } from "../../title-label/title-label";
import { Menu } from "../menu";
import styles from "./menu-list.module.css";

export function MenuList({ menu }) {
  return (
    <div>
      <TitleLabel label="Меню:" />
      <ul className={styles.menuTextGridWithGap}>
        {menu.map((dish) => (
          <Menu
            key={dish.id}
            menu={dish}
          />
        ))}
      </ul>
    </div>
  );
}
