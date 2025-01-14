import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";
import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return <CampersList />;
};

export default CatalogPage;
