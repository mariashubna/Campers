import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}> {children} </Suspense>
    </>
  );
};
