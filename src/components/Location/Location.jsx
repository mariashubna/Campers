import css from "./Location.module.css";
import sprite from "../../images/icons.svg";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

const Location = () => {
  const campers = useSelector(selectCampers);
  const cities = [...new Set(campers.map((camper) => camper.location))];
  console.log(cities);

  return (
    <div className={css.location_wrap}>
      <label htmlFor="location">Location</label>
      <input name="location" placeholder="Kyiv, Ukraine"></input>
      <svg className={css.location} width="16" height="16">
        <use href={`${sprite}#icon-map`} />
      </svg>
    </div>
  );
};
export default Location;
