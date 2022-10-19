import React from "react";
import "./Page-ten.css";
import skob from "../../../img/skob.png"
import Ava from "../../Avatar/ava";
import Kent from "../../../img/Kent.png";

import slack from "../../../img/slack.png";
import dato from "../../../img/dato.png";
import tb from "../../../img/tb.png";
import cub from "../../../img/cub.png";
import loop from "../../../img/loop.png";
import flickr from "../../../img/flickr.png";

const Pageten = () => {
  return (
    <div className="page-ten">
      <div className="slider-container">
        <div className="slider-info">
          <div className="slider-h">What client saying</div>
          <div className="imgs">
            <img src={skob} alt=""/>
          </div>
          <div className="slider-p">
            ” I really can recommend this theme, because it’s coded very well<br/>
            and with the Webflow page builder it’s really easy to build your <br/> own
            website! Also it’s updated regularly and new functions are<br/> added! “
          </div>
          <Ava
            img={Kent}
            name={"Lauren Nunnally"}
            skill={"Director of Support"}
          />
        </div>
      </div>
      <hr className="hr"/>

      <div className="ten-img">
        <img src={slack} alt=""/>
        <img src={dato} alt=""/>
        <img src={tb} alt=""/>
        <img src={cub} alt=""/>
        <img src={loop} alt=""/>
        <img src={flickr} alt=""/>
      </div>
    </div>
  );
};

export default Pageten;
