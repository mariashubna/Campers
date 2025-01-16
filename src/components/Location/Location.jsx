import css from "./Location.module.css";
import sprite from "../../images/icons.svg";

const Location = ({ onChange }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    // if (!/^[a-zA-Z]*$/.test(value)) {
    // }
    onChange("location", value);
  };

  return (
    <div className={css.location_wrap}>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <input
        name="location"
        placeholder="Kyiv, Ukraine"
        onChange={handleInputChange}
      />
      <svg className={css.location} width="20" height="20">
        <use href={`${sprite}#icon-map`} />
      </svg>
    </div>
  );
};

export default Location;
