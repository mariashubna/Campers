import { Link, NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../images/logo.svg";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { selectFavorite } from "../../redux/favorites/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const location = useLocation();
  const favorites = useSelector(selectFavorite);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };
  return (
    <header className={css.header}>
      <div className={`container ${css.wrap} `}>
        <Link className={css.logo} to="/">
          <img src={logo} width="136" height="15" />
        </Link>
        <nav>
          <NavLink className={getActiveClass} to="/">
            Home
          </NavLink>
          <NavLink className={getActiveClass} to="/catalog">
            Catalog
          </NavLink>
        </nav>
        {location.pathname === "/catalog" && favorites.length > 0 && (
          <FavoriteButton />
        )}
      </div>
    </header>
  );
};

export default Navigation;
