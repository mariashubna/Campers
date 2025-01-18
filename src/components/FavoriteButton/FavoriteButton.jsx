import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/icons.svg";
import { selectIsOpen } from "../../redux/favorites/selectors";
import { openCloseFavorite } from "../../redux/favorites/slice";
import css from "./FavoriteButton.module.css";

const FavoriteButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  const handleOpen = () => {
    dispatch(openCloseFavorite());
  };

  return (
    <button
      type="button"
      className={isOpen ? css.favorite_btn : css.btn}
      onClick={handleOpen}
    >
      <svg width="26" height="24">
        <use href={`${sprite}#icon-heart`} />
      </svg>
    </button>
  );
};

export default FavoriteButton;
