import { useSelector } from "react-redux";
import sprite from "../../images/icons.svg";
import css from "./CamperDetail.module.css";
import { selectLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import Gallery from "../Gallery/Gallery";

const CamperDetail = ({ camper }) => {
  const isLoading = useSelector(selectLoading);

  if (!camper) {
    return;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={css.camper}>
      <div className="container">
        <h2>{camper.name}</h2>
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
        <p className={css.price}>€{camper.price},00</p>
        <Gallery camper={camper} />

        <p className={css.description}>{camper.description}</p>
      </div>
    </section>
  );
};

export default CamperDetail;
