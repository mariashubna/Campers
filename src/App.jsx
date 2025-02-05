import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./redux/campers/operations";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("filters");
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
