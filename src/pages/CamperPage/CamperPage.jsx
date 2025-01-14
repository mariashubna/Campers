import { useSelector } from "react-redux";
import css from "./CamperPage.module.css";
import { selectCampers, selectLoading } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import sprite from "../../images/icons.svg";
import Loader from "../../components/Loader/Loader";

const CamperPage = () => {
  const { id } = useParams();
  const isLoading = useSelector(selectLoading);

  const campers = useSelector(selectCampers);
  const camper = campers.find((camper) => camper.id === id);

  if (!camper) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <li className={css.camper}>
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
            <p>€{camper.price},00</p>
          </div>
          <ul>
            {camper.gallery.map((img, index) => (
              <li key={index}>
                <img src={img.thumb} alt={`Gallery ${index + 1}`} />
              </li>
            ))}
          </ul>

          <p className={css.description}>{camper.description}</p>
        </li>
      )}
    </>
  );
};

export default CamperPage;
