import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/selectors";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
