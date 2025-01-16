import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./EquipmentFilterItem.module.css";

const EquipmentFilterItem = ({ feature, customClass }) => {
  console.log(customClass);
  return (
    <li className={css.features}>
      <label className={css.btn}>
        <input type="checkbox" />
        <span className={css.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default EquipmentFilterItem;
