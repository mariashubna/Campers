import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  const handleClick = () => {};

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
      <button className={css.btn} type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default CampersList;
