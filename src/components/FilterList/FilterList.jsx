import EquipmentFilterItem from "../EquipmentFilterItem/EquipmentFilterItem";
import TypeFilterItem from "../TypeFilterItem/TypeFilterItem";

import css from "./FilterList.module.css";

const FilterList = ({ filterData, customClass, type }) => {
  return (
    <ul className={css.list}>
      {filterData.map((filter, index) =>
        type === "checkbox" ? (
          <EquipmentFilterItem
            key={index}
            feature={filter}
            customClass={customClass}
          />
        ) : (
          <TypeFilterItem
            key={index}
            feature={filter}
            customClass={customClass}
          />
        )
      )}
    </ul>
  );
};
export default FilterList;
