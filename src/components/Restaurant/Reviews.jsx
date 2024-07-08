import "./restaurant.css";
import { ReviewForm } from "./review-form/review-form";

export function Reviews({ reviews }) {
  return (
    <>
      <h3 className="blueLabel">Отзывы:</h3>
      <ul className="textGridWithGap">
        {reviews.map((review) => (
          <>
            <li className="textGrid">
              <span>
                {review.user}: {review.text}
              </span>
              <span>{review.rating}★</span>
            </li>
          </>
        ))}
      </ul>
      <ReviewForm />
    </>
  );
}
