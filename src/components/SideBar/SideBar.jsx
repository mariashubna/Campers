import Location from "../Location/Location";
import css from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={css.aside}>
      <Location />
    </aside>
  );
};

export default SideBar;
