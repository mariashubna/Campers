import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { fetchCampers } from "../../redux/campers/operations";
import Filter from "../Filter/Filter";
import Location from "../Location/Location";
import css from "./SideBar.module.css";
import vehicleData from "../../data/vehicle.json";
import typeData from "../../data/type.json";
import Button from "../Button/Button";
import { selectFilters } from "../../redux/filters/selectors";

const SideBar = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  console.log(filters);

  const handleFilterChange = (name, value) => {
    dispatch(changeFilter({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements;

    const isFormEmpty =
      !form.location.value &&
      !Array.from(form).some(
        (input) =>
          (input.type === "checkbox" || input.type === "radio") && input.checked
      );

    if (isFormEmpty) {
      alert("Please select at least one filter option.");
      return;
    }

    const activeFilters = Object.entries(filters).filter(([, value]) => value);
    const params = Object.fromEntries(activeFilters);

    dispatch(fetchCampers(params));

    Array.from(form).forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      }
    });

    form.location.value = "";
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
