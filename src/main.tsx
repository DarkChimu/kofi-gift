import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = lazy(() => import("./App"));

const Spinner = () => {
  return (
    <div className="fs_preloader">
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face"></div>
      </div>
    </div>
  );
};

export default Spinner;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
