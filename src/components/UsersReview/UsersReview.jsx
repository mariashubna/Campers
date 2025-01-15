import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/selectors";

const UsersReview = () => {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper ? camper.reviews : [];

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <li key={index}>
            <p>{review.text}</p>
            <p>Rating: {review.reviewer_name}</p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
};

export default UsersReview;
