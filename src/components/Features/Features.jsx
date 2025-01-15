import { useSelector } from "react-redux";
import BookForm from "../BookForm/BookForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { selectLoading, selectSelectedCamper } from "../../redux/selectors";
import Loader from "../Loader/Loader";

const Features = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      {isLoading ? <Loader /> : <VehicleDetails />}

      <BookForm />
    </div>
  );
};
export default Features;
