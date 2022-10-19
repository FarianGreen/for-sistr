import React from "react";
import "./App.css";
import StartPage from "../Pages/Page-1";
import SeoStick from "../Pages/SeoStick/SeoStick";
import PageThree from "../Pages/Page-3";
import PageFour from "../Pages/Page-4/page-four";
import PageFive from "../Pages/Page-5/page-five";
import Pagesix from "../Pages/page-6";
import Pageseven from "../Pages/Page-7/page-seven";
import PageEight from "../Pages/Page-8/page-eight";
import PageNine from "../Pages/Page-9";
import Pageten from "../Pages/Page-10/Page-ten";
import Pageeleven from "../Pages/Page-11";
import Touch from "../Pages/Touch";
import LastPage from "../Pages/Last-page/last-page";

const App = () => {
  return (
    <div>
      <StartPage />
      <SeoStick />
      <PageThree />
      <PageFour />
      <PageFive />
      <Pagesix />
      <Pageseven />
      <PageEight />
      <PageNine />
      <Pageten />
      <Pageeleven />
      <Touch />
      <LastPage />
    </div>
  );
};

export default App;
