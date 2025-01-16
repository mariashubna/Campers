import sprite from "../../images/icons.svg";
import css from "./FeaturesItem.module.css";

const FeaturesItem = ({ feature, customClass }) => {
  return (
    <>
      <svg
        className={customClass ? css[customClass] : ""}
        width="20"
        height="20"
      >
        <use href={`${sprite}#${feature.icon}`} />
      </svg>
      <p className={css.name}>{feature.text}</p>
    </>
  );
};
export default FeaturesItem;
