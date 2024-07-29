import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../../redux/etities/review/review";

export function ReviewContainer({ reviewId }) {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return <Review review={review} />;
}
