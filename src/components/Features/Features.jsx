import { useSelector } from "react-redux";
import BookForm from "../BookForm/BookForm";
import FeatureDetails from "../FeatureDetails/FeatureDetails";
import { selectLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import css from "./Features.module.css";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

const Features = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.features_wrap}>
          <FeatureDetails />
          <VehicleDetails />
        </div>
      )}

      <BookForm />
    </>
  );
};
export default Features;
