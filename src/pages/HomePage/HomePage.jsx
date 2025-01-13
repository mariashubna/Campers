import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.home}>
      <div className="container">
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.info}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.btn} to="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
