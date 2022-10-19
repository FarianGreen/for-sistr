import React from "react";
import "./page-six.css";
import planepaper from "../../../img/planepaper.png";
import pc from "../../../img/pc.png";
import mobile from "../../../img/mobile.png";
import rupor from "../../../img/rupor.png";
import adog from "../../../img/adog.png";
import adds from "../../../img/adds.png";
import cashwomen from "../../../img/cashwomen.png";
import BlockText from "../../Block-texts";
import Button from "../../Button";
import Square from "./Square";

const Pagesix = () => {
  return (
    <div className="page-six">
      <div className="page-h">Our Services</div>
      <div className="seo-content">
        <Square image={planepaper} text={"SEO & Marketing"} />
        <Square image={adog} text={"Email Marketing"} />
        <Square image={mobile} text={"Mobile Marketing"} />
        <Square image={pc} text={"Google Ads"} />
        <Square image={adds} text={"Social Media Ads"} />
        <Square image={rupor} text={"Digital Marketing"} />
      </div>

      <div className="page-three-conatiner">
        <div className="left-container">
          <div className="imgse">
            <BlockText
              htext={"SEO & Marketing"}
              ptext={
                "Spyro WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating on top of a great tool is even better customer support."
              }
            />
          </div>

          <div className="trafic">
            <div className="content-container">
              <span class="material-icons-outlined">done</span>
              <div className="content">Increase the Organic Traffic</div>
            </div>

            <div className="content-container">
              <span class="material-icons-outlined">done</span>
              <div className="content">On-Page Search Engine Optimization</div>
            </div>

            <div className="content-container">
              <span class="material-icons-outlined">done</span>
              <div className="content">White hat Backlink Generation</div>
            </div>
          </div>
          <Button class="btn max" text={"Explore Now"} />
        </div>

        <div className="right-container">
          <img src={cashwomen} />
        </div>
      </div>
    </div>
  );
};

export default Pagesix;
