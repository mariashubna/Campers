import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";
import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "./CamperPage.module.css";
import { selectSelectedCamper } from "../../redux/selectors";

import Loader from "../../components/Loader/Loader";
import CamperDetail from "../../components/CamperDetail/CamperDetail";
import { useEffect } from "react";
import { getCamper } from "../../redux/operations";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getCamper(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!camper) {
    return;
  }

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <>
      <CamperDetail camper={camper} />
      <section>
        <div className="container">
          <ul className={css.add_info_list}>
            <li>
              <NavLink className={getActiveClass} to="features">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr className={css.line} />
          <div className={css.features}>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default CamperPage;
