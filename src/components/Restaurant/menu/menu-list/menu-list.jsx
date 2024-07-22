import { TitleLabel } from "../../title-label/title-label";
import { MenuContainer } from "../menu-container";
import styles from "./menu-list.module.css";

export function MenuList({ menuIds }) {
  return (
    <div>
      <TitleLabel label="Меню:" />
      <ul className={styles.menuTextGridWithGap}>
        {menuIds.map((id) => (
          <MenuContainer
            key={id}
            menuId={id}
          />
        ))}
      </ul>
    </div>
  );
}
