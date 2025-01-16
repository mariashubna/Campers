import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { fetchFilteredCampers } from "../../redux/campers/operations";
import Filter from "../Filter/Filter";
import Location from "../Location/Location";
import css from "./SideBar.module.css";
import vehicleData from "../../data/vehicle.json";
import typeData from "../../data/type.json";
import Button from "../Button/Button";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (name, value) => {
    dispatch(changeFilter({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(fetchFilteredCampers());
  };

  return (
    <aside className={css.aside}>
      <form className={css.form} onSubmit={handleSubmit}>
        <Location onChange={handleFilterChange} />
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
