import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./FilterItem.module.css";

const FilterItem = ({ feature }) => {
  return (
    <li className={css.features}>
      <button className={css.btn}>
        <FeaturesItem feature={feature} />
      </button>
    </li>
  );
};

export default FilterItem;
