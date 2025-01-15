import sprite from "../../images/icons.svg";
import css from "./CamperDetail.module.css";

const CamperDetail = ({ camper }) => {
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
        <ul className={css.gallery}>
          {camper.gallery.map((img, index) => (
            <li key={index}>
              <img
                className={css.gallery_img}
                src={img.thumb}
                alt={camper.name}
                width="292px"
                height="312px"
              />
            </li>
          ))}
        </ul>
        <p className={css.description}>{camper.description}</p>
      </div>
    </section>
  );
};

export default CamperDetail;
