import styles from "./custom-button.module.css";
import classNames from "classnames";

export function CustomButton({ onClick, children, style }) {
  return (
    <button
      onClick={onClick}
      className={classNames(style, styles.customButton)}>
      {children}
    </button>
  );
}

export default CustomButton;
