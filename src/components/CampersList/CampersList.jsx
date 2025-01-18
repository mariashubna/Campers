import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectLimit,
  selectLoading,
  selectPage,
  selectTotal,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { changePage } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import { selectFavorite, selectIsOpen } from "../../redux/favorites/selectors";
import Loader from "../Loader/Loader";
import { closeFavorite } from "../../redux/favorites/slice";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const isOpen = useSelector(selectIsOpen);
  const favoriteCampers = useSelector(selectFavorite);
  const isLoading = useSelector(selectLoading);
  const limit = useSelector(selectLimit);

  const dispatch = useDispatch();

  const handleLoader = () => {
    const filter = JSON.parse(localStorage.getItem("filters"));
    const nextPage = page + 1;
    dispatch(changePage(nextPage));
    dispatch(fetchCampers(filter));
  };

  const handleClick = () => {
    dispatch(closeFavorite());
    dispatch(fetchCampers());
  };

  const isMorePages = !isOpen && total && page * limit < total;

  const currentList = isOpen ? favoriteCampers : campers;
  const isListEmpty = currentList.length === 0;

  return (
    <div className={css.wrap}>
      {isListEmpty && !isLoading ? (
        <>
          <p className={css.message}>
            Sorry, no results found. Do you want to go to the catalog?
          </p>
          <button className="btn" onClick={handleClick}>
            Go back
          </button>
        </>
      ) : (
        <>
          <ul className={css.list}>
            {currentList.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </ul>
          {isLoading ? (
            <Loader />
          ) : (
            isMorePages && (
              <button className={css.btn} type="button" onClick={handleLoader}>
                Load more
              </button>
            )
          )}
        </>
      )}
    </div>
  );
};

export default CampersList;
