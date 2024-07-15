import styles from "./custom-button.module.css";
import classNames from "classnames";

export function CustomButton({
  onClick,
  children,
  viewVariant,
  colorViewVariant = "default",
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.customButton, {
        [styles.wideButton]: viewVariant === "wide",
        [styles.defaultColor]: colorViewVariant === "default",
        [styles.redColor]: colorViewVariant === "red",
        [styles.blueColor]: colorViewVariant === "blue",
      })}>
      {children}
    </button>
  );
}
