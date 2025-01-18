import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSelectedCamper,
} from "../../redux/campers/selectors";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import css from "./CamperPage.module.css";

import Loader from "../../components/Loader/Loader";
import CamperDetail from "../../components/CamperDetail/CamperDetail";
import { useEffect } from "react";
import { getCamper } from "../../redux/campers/operations";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCamper(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && camper && (
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
      )}
    </>
  );
};

export default CamperPage;
