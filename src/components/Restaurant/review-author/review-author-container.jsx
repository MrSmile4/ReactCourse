import { ReviewAuthor } from "./review-author";
import { useGetUsersQuery } from "../../../redux/services/api";

export function ReviewAuthorContainer({ userId }) {
  const { data: user } = useGetUsersQuery(userId);

  if (!user) {
    return null;
  }

  return <ReviewAuthor user={user} />;
}
