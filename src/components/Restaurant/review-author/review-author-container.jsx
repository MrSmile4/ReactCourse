import { useSelector } from "react-redux";
import { selectReviewAuthorById } from "../../../redux/etities/review-author";
import { ReviewAuthor } from "./review-author";

export function ReviewAuthorContainer({ userId }) {
  const user = useSelector((state) => selectReviewAuthorById(state, userId));

  if (!user) {
    return null;
  }

  return <ReviewAuthor user={user} />;
}
