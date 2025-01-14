import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/selectors";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    <ul>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
