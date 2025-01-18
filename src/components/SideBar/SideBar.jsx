import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  changeIsFiltered,
  resetFilter,
} from "../../redux/filters/slice";
import { fetchCampers } from "../../redux/campers/operations";
import Filter from "../Filter/Filter";
import Location from "../Location/Location";
import css from "./SideBar.module.css";
import vehicleData from "../../data/vehicle.json";
import typeData from "../../data/type.json";
import Button from "../Button/Button";
import { selectFilters, selectIsFiltered } from "../../redux/filters/selectors";
import { changePage, cleanItems } from "../../redux/campers/slice";
import { closeFavorite } from "../../redux/favorites/slice";
import { selectIsOpen } from "../../redux/favorites/selectors";
import toast, { Toaster } from "react-hot-toast";

const SideBar = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const isFiltered = useSelector(selectIsFiltered);
  const isOpen = useSelector(selectIsOpen);

  const notify = () => {
    toast.error("Please select at least one filter option.", {
      duration: 3000,
      position: "top-left",
    });
  };

  const handleFilterChange = (name, value) => {
    dispatch(changeFilter({ name, value }));
  };

  const handleReset = () => {
    dispatch(resetFilter());
    dispatch(cleanItems());
    dispatch(closeFavorite());
    dispatch(fetchCampers());
  };

  const handleCleanFilters = (form) => {
    Array.from(form).forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      }
    });

    form.location.value = "";
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
      notify();
      return;
    }
    dispatch(changePage(1));
    dispatch(cleanItems());
    dispatch(closeFavorite());
    dispatch(fetchCampers(filters));
    handleCleanFilters(e.target.elements);
    dispatch(changeIsFiltered());
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
        <ul className={css.btn_list}>
          <li>
            <Button text="Search" />
          </li>

          {isFiltered && !isOpen && (
            <li>
              <button className="btn" type="button" onClick={handleReset}>
                Reset
              </button>
            </li>
          )}
        </ul>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </aside>
  );
};

export default SideBar;
