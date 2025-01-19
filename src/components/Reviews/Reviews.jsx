import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/campers/selectors";
import UsersReview from "../UsersReview/UsersReview";
import css from "./Reviews.module.css";

const Reviews = () => {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper ? camper.reviews : [];

  return (
    <ul className={css.list}>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <UsersReview key={index} review={review} />
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
};
export default Reviews;
