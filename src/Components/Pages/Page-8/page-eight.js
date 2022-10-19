import React from "react";
import "./page-eight.css";
import Kent from "../../../img/Kent.png";
import Batman from "../../../img/Batman.png";
import Bond from "../../../img/Bond.png";
import Prince from "../../../img/Prince.png";
import Anton from "../../../img/Anton.png";
import Eva from "../../../img/Eva.png";

import Ava from "../../Avatar/ava";

const PageEight = (props) => {
  return (
    <div className="page-eight">
      <div className="eight-h">Marketing Team</div>
      <div className="eight-p">The most wonderful people our company</div>
      <div className="team-container">
        <Ava img={Kent} name={"Jonathan Kent"} skill={"SEOManager"}/>
        <Ava img={Batman} name={"Bruce Wayne"} skill={"Campaign Planner"}/>
        <Ava img={Bond} name={"James Brown"} skill={"Social Media Executive"}/>
        <Ava img={Prince} name={"Diana Prince"} skill={"Marketing Expert"}/>
        <Ava img={Anton} name={"Anthony Jones"} skill={"SEO Executive"}/>
        <Ava img={Eva} name={"Adam Evans"} skill={"Graphic Designer"}/>
      </div>
    </div>
  );
};
export default PageEight;
