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
import { changePage, cleanItems } from "../../redux/campers/slice";

const SideBar = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const handleFilterChange = (name, value) => {
    dispatch(changeFilter({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements;

    localStorage.removeItem("filters");

    localStorage.setItem("filters", JSON.stringify(filters));

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
    dispatch(changePage(1));
    dispatch(cleanItems());

    dispatch(fetchCampers(filters));

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
        <Button text="Search" />
      </form>
    </aside>
  );
};

export default SideBar;
