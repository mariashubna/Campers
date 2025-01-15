import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/campers/selectors";
import css from "./FeatureDetails.module.css";
import FeatureList from "../FeaturesList/FeaturesList";

const FeatureDetails = () => {
  const camper = useSelector(selectSelectedCamper);

  console.log("camper", camper);

  return (
    <div>
      <FeatureList camper={camper} customClass={css.custom_features_list} />
    </div>
  );
};

export default FeatureDetails;
