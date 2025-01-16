import Filter from "../Filter/Filter";
import Location from "../Location/Location";
import css from "./SideBar.module.css";
import vehicleData from "../../data/vehicle.json";
import typeData from "../../data/type.json";
import Button from "../Button/Button";

const SideBar = () => {
  return (
    <aside className={css.aside}>
      <form className={css.form}>
        <Location />
        <div className={css.filters}>
          <p className={css.title}>Filters</p>
          <Filter
            title="Vehicle equipment"
            filterData={vehicleData}
            type="checkbox"
          />
          <Filter title="Vehicle type" filterData={typeData} type="radio" />
        </div>
        <Button text=" Search" />
      </form>
    </aside>
  );
};

export default SideBar;
