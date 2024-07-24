import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/etities/user";
import { ReviewAuthor } from "./review-author";

export function ReviewAuthorContainer({ userId }) {
  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return null;
  }

  return <ReviewAuthor user={user} />;
}
