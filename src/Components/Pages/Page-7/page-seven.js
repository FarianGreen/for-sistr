import React from "react";
import "./page-seven.css";
import sloi from "../../../img/sloi.png";
import boxs from "../../../img/boxs.png";
import bdiagram from "../../../img/bdiagram.png";

const Pageseven = () => {
  return (
    <div className="page-seven">
      <div className="block-info-seven">
        <div className="seven-h">
          How <span className="yelseo">SEO</span> works step <br />
          by step?
        </div>
        <div className="seven-p">
          The best part of being a part of this community
        </div>
      </div>

      <div className="seven-diagram">
        <div className="diagram">
          <div className="dimg">
            <img src={bdiagram} />
          </div>
          <div className="s-h">Business Analysis</div>
          <div className="s-p">
            Spyro is a landing page WP <br/>theme, that lets you build <br/> stunning high
            performance.
          </div>
        </div>
           <div className="point"></div>
        <div className="diagram">
          <div className="dimg">
            <img src={sloi} />
          </div>
          <div className="s-h">Keyword Analysis</div>
          <div className="s-p">
            Spyro is a landing page WP <br/>theme, that lets you build <br/> stunning high
            performance.
          </div>
        </div>
            <div className="point"></div>
        <div className="diagram">
          <div className="dimg">
            <img src={boxs} />
          </div>
          <div className="s-h">Optimization</div>
          <div className="s-p">
            Spyro is a landing page WP <br/>theme, that lets you build <br/> stunning high
            performance.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pageseven;
