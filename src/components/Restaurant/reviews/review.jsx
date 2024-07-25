import { ReviewAuthorContainer } from "../review-author/review-author-container";
import styles from "./reviews.module.css";

export function Review({ review }) {
  const { id, userId, text, rating } = review;

  return (
    <li
      key={id}
      className={styles.reviewTextGrid}>
      <span>
        {<ReviewAuthorContainer userId={userId} />} : {text}
      </span>
      <span>
        {rating}
        <span className={styles.reviewRatingColor}>★</span>
      </span>
    </li>
  );
}
