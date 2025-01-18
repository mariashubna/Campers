import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectLoading,
  selectPage,
  selectTotal,
  selectError,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { changePage } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import { selectFavorite, selectIsOpen } from "../../redux/favorites/selectors";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const isOpen = useSelector(selectIsOpen);
  const favoriteCampers = useSelector(selectFavorite);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  const handleClick = () => {
    const filter = JSON.parse(localStorage.getItem("filters"));
    console.log(filter);
    const nextPage = page + 1;
    dispatch(changePage(nextPage));
    dispatch(fetchCampers(filter));
  };

  const isMorePages = !isOpen && total && page * 10 < total;

  const currentList = isOpen ? favoriteCampers : campers;
  const isListEmpty = currentList.length === 0;

  return (
    <div className={css.wrap}>
      {isLoading ? (
        <Loader />
      ) : isListEmpty ? (
        <p className={css.message}>Sorry, no results found.</p>
      ) : (
        <>
          <ul className={css.list}>
            {currentList.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </ul>
          {isMorePages && (
            <button className={css.btn} type="button" onClick={handleClick}>
              Load more
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CampersList;
