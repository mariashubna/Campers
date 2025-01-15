import css from "./Location.module.css";
import sprite from "../../images/icons.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useState } from "react";

const Location = () => {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();

  const cities = [...new Set(campers.map((camper) => camper.location))].map(
    (city) => {
      const [country, place] = city.split(", ");
      return { formatted: `${place}, ${country}`, original: city };
    }
  );

  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.formatted.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === "") {
      dispatch(changeFilter({ location: "" }));
    } else {
      setShowDropdown(value !== "");
    }
  };

  const handleCitySelect = (city) => {
    setInputValue(city.formatted);
    dispatch(changeFilter({ location: city.original }));
    setShowDropdown(false);
  };

  return (
    <div className={css.location_wrap}>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <input
        name="location"
        placeholder="Kyiv, Ukraine"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(filteredCities.length > 0)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />
      <svg className={css.location} width="20" height="20">
        <use href={`${sprite}#icon-map`} />
      </svg>
      {showDropdown && (
        <ul className={css.dropdown}>
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <li
                key={index}
                className={css.dropdown_item}
                onMouseDown={() => handleCitySelect(city)}
              >
                {city.formatted}
              </li>
            ))
          ) : (
            <li className={`${css.dropdown_item} ${css.no_results}`}>
              No matches found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Location;
