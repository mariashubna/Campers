import sprite from "../../images/icons.svg";
import css from "./UsersReview.module.css";

const UsersReview = ({ review }) => {
  return (
    <li>
      <div className={css.wrap}>
        <p className={css.avatar}>{review.reviewer_name[0]}</p>
        <div className={css.info}>
          <p>{review.reviewer_name}</p>
          <ul className={css.stars_list}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <li key={i}>
                  <svg
                    width="16"
                    height="16"
                    style={{
                      fill:
                        i < review.reviewer_rating
                          ? "var(--rating)"
                          : "var(--badges)",
                    }}
                  >
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <p className={css.description}>{review.comment}</p>
    </li>
  );
};

export default UsersReview;
