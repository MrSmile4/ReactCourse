import { ReviewForm } from "../../review-form/review-form";
import { TitleLabel } from "../../title-label/title-label";
import { ReviewContainer } from "../review-container";
import styles from "./review-list.module.css";

export function ReviewList({ reviewIds }) {
  if (!reviewIds) {
    return null;
  }

  return (
    <div>
      <TitleLabel label="Отзывы:" />
      <ul className={styles.reviewTextGridWithGap}>
        {reviewIds.map((id) => (
          <ReviewContainer
            key={id}
            reviewId={id}
          />
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
}
