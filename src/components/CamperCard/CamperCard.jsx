import { Link, useLocation } from "react-router-dom";
import sprite from "../../images/icons.svg";
import css from "./CamperCard.module.css";
import FeatureList from "../FeaturesList/FeaturesList";

const CamperCard = ({ camper }) => {
  const location = useLocation();

  return (
    <li className={css.camper}>
      <img
        className={css.img}
        src={camper.gallery[0].thumb}
        width="292px"
        height="320px"
      />
      <div>
        <div className={css.title_wrap}>
          <h2>{camper.name}</h2>
          <div className={css.wrap_price}>
            <p>€{camper.price},00</p>
            <button>
              <svg width="26" height="24">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.info_wrap}>
          <div className={css.rating_wrap}>
            <svg className={css.star} width="16" height="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location_wrap}>
            <svg className={css.location} width="16" height="16">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <FeatureList camper={camper} />
        <Link className={css.btn} to={`/catalog/${camper.id}`} state={location}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
