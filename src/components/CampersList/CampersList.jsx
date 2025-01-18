import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectPage,
  selectTotal,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { changePage } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import { selectFavorite, selectIsOpen } from "../../redux/favorites/selectors";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  let page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const isOpen = useSelector(selectIsOpen);
  const favoriteCampers = useSelector(selectFavorite);

  const dispatch = useDispatch();

  const handleClick = () => {
    const filter = JSON.parse(localStorage.getItem("filters"));
    console.log(filter);
    const nextPage = page + 1;
    dispatch(changePage(nextPage));
    dispatch(fetchCampers(filter));
  };

  const isMorePages = !isOpen && total && page * 10 < total;

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {!isOpen &&
          campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        {isOpen &&
          favoriteCampers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
      </ul>
      {isMorePages && (
        <button className={css.btn} type="button" onClick={handleClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
