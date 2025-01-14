import { Link, useLocation } from "react-router-dom";
import sprite from "../../images/icons.svg";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const location = useLocation();

  const features = [
    { icon: "icon-diagram", text: camper.transmission },
    { icon: "icon-petrol", text: camper.engine },
    { icon: "icon-cup", text: camper.kitchen ? "Kitchen" : null },
    { icon: "icon-wind", text: camper.AC ? "AC" : null },
    { icon: "icon-shower", text: camper.bathroom ? "Bathroom" : null },
    { icon: "icon-radios", text: camper.radio ? "Radio" : null },
    { icon: "icon-microwave", text: camper.microwave ? "Microwave" : null },
    { icon: "icon-tv", text: camper.TV ? "TV" : null },
    { icon: "icon-water", text: camper.water ? "Water" : null },
    { icon: "icon-gas", text: camper.gas ? "Gas" : null },
    {
      icon: "icon-fridge",
      text: camper.microwave ? "Refrigerator" : null,
    },
  ].filter((feature) => feature.text);

  console.log(camper);
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
        <ul className={css.features_list}>
          {features.map((feature, index) => (
            <li key={index} className={css.features}>
              <svg width="20" height="20">
                <use href={`${sprite}#${feature.icon}`} />
              </svg>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Link className={css.btn} to={`/catalog/${camper.id}`} state={location}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
