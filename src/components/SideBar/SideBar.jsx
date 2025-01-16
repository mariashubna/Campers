import Filter from "../Filter/Filter";
import Location from "../Location/Location";
import css from "./SideBar.module.css";
import vehicleData from "../../data/vehicle.json";
import typeData from "../../data/type.json";
import Button from "../Button/Button";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (category, name, value) => {
    console.log(category, name, value);
    dispatch(changeFilter({ category, name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };

  return (
    <aside className={css.aside}>
      <form className={css.form} onSubmit={handleSubmit}>
        <Location />
        <div className={css.filters}>
          <p className={css.title}>Filters</p>
          <Filter
            title="Vehicle equipment"
            filterData={vehicleData}
            type="checkbox"
            onChange={handleFilterChange}
          />
          <Filter
            title="Vehicle type"
            filterData={typeData}
            type="radio"
            onChange={handleFilterChange}
          />
        </div>
        <Button text=" Search" />
      </form>
    </aside>
  );
};

export default SideBar;
