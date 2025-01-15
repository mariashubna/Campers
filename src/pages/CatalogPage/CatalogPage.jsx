import CampersList from "../../components/CampersList/CampersList";
import SideBar from "../../components/SideBar/SideBar";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <section className={css.catalog}>
      <div className={`${css.wrap} container`}>
        <SideBar />
        <CampersList />
      </div>
    </section>
  );
};

export default CatalogPage;
