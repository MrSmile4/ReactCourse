import { ReviewForm } from "./review-form/review-form";
import styles from "./restaurant.module.css";

export function Reviews({ reviews }) {
  return (
    <>
      <h3 className={styles.blueLabel}>Отзывы:</h3>
      <ul className={styles.textGridWithGap}>
        {reviews.map((review) => (
          <>
            <li className={styles.textGrid}>
              <span>
                {review.user}: {review.text}
              </span>
              <span>
                {review.rating}
                <span className={styles.ratingColor}>★</span>
              </span>
            </li>
          </>
        ))}
      </ul>
      <ReviewForm />
    </>
  );
}
