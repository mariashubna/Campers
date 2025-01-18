import css from "./Loader.module.css";
import sprite from "../../images/icons.svg";

const Loader = () => {
  return (
    <div className={css.wrap}>
      <div className={css.loader}>
        <svg className={css.car} width="102" height="40">
          <use href={`${sprite}#icon-car`} />
        </svg>
      </div>
    </div>
  );
};
export default Loader;
