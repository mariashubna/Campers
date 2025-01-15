import { useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/selectors";
import css from "./VehicleDetails.module.css";

const VehicleDetails = () => {
  const camper = useSelector(selectSelectedCamper);

  if (!camper) {
    return;
  }

  const handleValue = (value) => {
    const match = value?.match(/([\d.]+)([a-zA-Z]+)/);
    const matchValue = match ? match[1] : "";
    const matchUnit = match ? match[2] : "";
    return `${matchValue} ${matchUnit}`;
  };

  return (
    <>
      <h3 className={css.title}>Vehicle details</h3>
      <hr className={css.line} />
      <ul className={css.list}>
        <li>
          <p>Form</p>
          <p></p>
        </li>
        <li>
          <p>Length</p>
          <p>{handleValue(camper.length)}</p>
        </li>
        <li>
          <p>Width</p>
          <p>{handleValue(camper.width)}</p>
        </li>
        <li>
          <p>Height</p>
          <p>{handleValue(camper.height)}</p>
        </li>
        <li>
          <p>Tank</p>
          <p>{handleValue(camper.tank)}</p>
        </li>
        <li>
          <p>Consumption</p>
          <p>{camper.consumption}</p>
        </li>
      </ul>
    </>
  );
};
export default VehicleDetails;
