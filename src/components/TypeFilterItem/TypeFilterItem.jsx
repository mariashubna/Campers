import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./TypeFilterItem.module.css";

const TypeFilterItem = ({ feature, customClass, onChange }) => {
  const handleChange = (e) => {
    const input = e.target;
    onChange(input.name, input.value);
  };

  return (
    <li className={css.features}>
      <label className={css.btn}>
        <input
          className={css.input}
          type="radio"
          name="form"
          value={feature.query}
          onChange={handleChange}
        />
        <span className={css.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default TypeFilterItem;
