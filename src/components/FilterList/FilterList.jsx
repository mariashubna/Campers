import FilterItem from "../FilterItem/FilterItem";

import css from "./FilterList.module.css";

const FilterList = ({ filterData }) => {
  return (
    <ul className={css.list}>
      {filterData.map((filter, index) => (
        <FilterItem key={index} feature={filter} />
      ))}
    </ul>
  );
};
export default FilterList;
