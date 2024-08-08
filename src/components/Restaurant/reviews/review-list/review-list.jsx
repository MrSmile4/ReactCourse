import { ReviewForm } from "../../review-form/review-form";
import { TitleLabel } from "../../title-label/title-label";
import { Review } from "../review";
import styles from "./review-list.module.css";

export function ReviewList({ reviews, onCreateReview }) {
  if (!reviews) {
    return null;
  }

  return (
    <div>
      <TitleLabel label="Отзывы:" />
      <ul className={styles.reviewTextGridWithGap}>
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      <ReviewForm onCreateReview={onCreateReview} />
    </div>
  );
}
