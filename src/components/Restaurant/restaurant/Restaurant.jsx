import { MenuList } from "../menu/menu-list/menu-list";
import { ReviewList } from "../reviews/review-list/review-list";
import styles from "./restaurant.module.css";

export function Restaurant({ name, menu, reviews, onCreateReview }) {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.restaurantLabel}>{name}</h2>
      {menu?.length ? <MenuList menu={menu} /> : <span>Menu is empty</span>}
      {reviews?.length ? (
        <ReviewList
          reviews={reviews}
          onCreateReview={onCreateReview}
        />
      ) : (
        <span>Reviews is empty</span>
      )}
    </div>
  );
}
