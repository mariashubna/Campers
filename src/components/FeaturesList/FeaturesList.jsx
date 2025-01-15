import FeaturesItem from "../FeaturesItem/FeaturesItem";
import css from "./FeaturesList.module.css";

const FeatureList = ({ camper, customClass }) => {
  const features = [
    { icon: "icon-diagram", text: camper.transmission },
    { icon: "icon-petrol", text: camper.engine },
    { icon: "icon-cup", text: camper.kitchen ? "Kitchen" : null },
    { icon: "icon-wind", text: camper.AC ? "AC" : null },
    { icon: "icon-shower", text: camper.bathroom ? "Bathroom" : null },
    { icon: "icon-radios", text: camper.radio ? "Radio" : null },
    { icon: "icon-microwave", text: camper.microwave ? "Microwave" : null },
    { icon: "icon-tv", text: camper.TV ? "TV" : null },
    { icon: "icon-water", text: camper.water ? "Water" : null },
    { icon: "icon-gas", text: camper.gas ? "Gas" : null },
    {
      icon: "icon-fridge",
      text: camper.microwave ? "Refrigerator" : null,
    },
  ].filter((feature) => feature.text);

  return (
    <ul className={`${css.features_list} ${customClass || ""}`}>
      {features.map((feature, index) => (
        <li key={index} className={css.features}>
          <FeaturesItem feature={feature} />
        </li>
      ))}
    </ul>
  );
};
export default FeatureList;
