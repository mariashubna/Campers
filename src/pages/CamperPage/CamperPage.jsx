import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSelectedCamper,
} from "../../redux/campers/selectors";
import { useNavigate, useParams } from "react-router-dom";
import css from "./CamperPage.module.css";

import Loader from "../../components/Loader/Loader";
import CamperDetail from "../../components/CamperDetail/CamperDetail";
import { useEffect, useState } from "react";
import { getCamper } from "../../redux/campers/operations";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookForm from "../../components/BookForm/BookForm";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("features");

  useEffect(() => {
    dispatch(getCamper(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getActiveClass = (section) => {
    return activeSection === section ? `${css.link} ${css.active}` : css.link;
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
                  <button
                    className={getActiveClass("features")}
                    onClick={() => handleSectionChange("features")}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className={getActiveClass("reviews")}
                    onClick={() => handleSectionChange("reviews")}
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <hr className={css.line} />
              <div className={css.features}>
                {activeSection === "features" && <Features />}
                {activeSection === "reviews" && <Reviews />}
                <BookForm />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CamperPage;
