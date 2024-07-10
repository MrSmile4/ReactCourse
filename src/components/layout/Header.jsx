import logo from "../../images/restaurants.png";
import styles from "./layout.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h2>Our best restaurants</h2>
      <img
        className={styles.img}
        src={logo}
      />
    </header>
  );
}
