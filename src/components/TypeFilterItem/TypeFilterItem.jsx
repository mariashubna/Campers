import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./TypeFilterItem.module.css";

const TypeFilterItem = ({ feature, customClass }) => {
  return (
    <li className={css.features}>
      <label className={css.btn}>
        <input
          type="radio"
          id={feature.name}
          name="typeFilter"
          value={feature.query}
        />
        <span className={css.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default TypeFilterItem;
