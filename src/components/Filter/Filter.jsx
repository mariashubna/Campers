import FilterList from "../FilterList/FilterList";
import css from "./Filter.module.css";

const Filter = ({ title, filterData }) => {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>{title}</h3>
      <hr className={css.line} />
      <FilterList filterData={filterData} />
    </div>
  );
};

export default Filter;
