import logo from "../../../images/restaurants.png";
import { ToggleThemeButton } from "../../toggle-theme-button/toggle-theme-button";
import { UserAuthButton } from "../../user-auth-button/user-auth-button";
import { useUser } from "../../user-context/user-context";
import styles from "./header.module.css";

export function Header() {
  const { value: user } = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <ToggleThemeButton />
        <h2>Our best restaurants</h2>
      </div>
      <div className={styles.headerText}>
        {user ? (
          <span className={styles.userText}>
            {user.firstName} {user.lastName}
          </span>
        ) : null}
        <UserAuthButton />
        <img
          className={styles.img}
          src={logo}
        />
      </div>
    </header>
  );
}
