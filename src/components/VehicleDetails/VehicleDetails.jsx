import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/selectors";
import sprite from "../../images/icons.svg";
import css from "./VehicleDetails.module.css";
import FeatureList from "../FeaturesList/FeaturesList";

const VehicleDetails = () => {
  const camper = useSelector(selectSelectedCamper);

  console.log("camper", camper);

  return (
    <div>
      <FeatureList camper={camper} />
    </div>
  );
};

export default VehicleDetails;
