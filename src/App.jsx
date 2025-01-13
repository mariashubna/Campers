import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Layout } from "./components/Layout/Layout";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const Features = lazy(() => import("./components/Features/Features"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
