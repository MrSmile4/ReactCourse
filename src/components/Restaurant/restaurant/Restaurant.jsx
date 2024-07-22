import { MenuList } from "../menu/menu-list/menu-list";
import { ReviewList } from "../reviews/review-list/review-list";
import styles from "./restaurant.module.css";

export function Restaurant({ rest }) {
  if (!rest) {
    return null;
  }

  const { name, menu, reviews } = rest;

  return (
    <div>
      <h2 className={styles.restaurantLabel}>{name}</h2>
      {menu?.length ? <MenuList menuIds={menu} /> : <span>Menu is empty</span>}
      {reviews?.length ? (
        <ReviewList reviewIds={reviews} />
      ) : (
        <span>Reviews is empty</span>
      )}
    </div>
  );
}
