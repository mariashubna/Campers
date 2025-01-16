import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./EquipmentFilterItem.module.css";

const EquipmentFilterItem = ({ feature, customClass, onChange }) => {
  const handleChange = (e) => {
    const input = e.target;
    console.log(input.name);
    let name = input.name;
    let value = input.checked;

    if (input.name === "manual" || input.name === "automatic") {
      value = input.checked ? input.name : "";
      name = "transmission";
    }

    if (
      input.name === "petrol" ||
      input.name === "hybrid" ||
      input.name === "diesel"
    ) {
      value = input.checked ? input.name : "";
      name = "engine";
    }

    console.log(name, value);

    onChange("equipment", name, value);
  };

  return (
    <li className={css.features}>
      <label className={css.btn}>
        <input type="checkbox" name={feature.query} onChange={handleChange} />
        <span className={css.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default EquipmentFilterItem;
