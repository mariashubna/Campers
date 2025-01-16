import FilterList from "../FilterList/FilterList";
import css from "./Filter.module.css";

const Filter = ({ title, filterData, type }) => {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>{title}</h3>
      <hr className={css.line} />
      <FilterList
        customClass="custom_сlass"
        filterData={filterData}
        type={type}
      />
    </div>
  );
};

export default Filter;
