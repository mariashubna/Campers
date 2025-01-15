import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/campers/selectors";
import UsersReview from "../UsersReview/UsersReview";
import css from "./UsersReviewList.module.css";

const UsersReviewList = () => {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper ? camper.reviews : [];

  return (
    <ul className={css.list}>
      <UsersReview reviews={reviews} />
    </ul>
  );
};
export default UsersReviewList;
