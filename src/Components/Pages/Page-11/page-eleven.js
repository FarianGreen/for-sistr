import React from "react";
import "./page-eleven.css";
import fil from "../../../img/fil.png";
import hob from "../../../img/hob.png";
import custumer from "../../../img/custumer.png";
import Button from "../../Button";

const Pageeleven = () => {
  return (
    <div className="page-eleven">
      <div className="eight-h">News & Case Studies</div>
      <div className="eight-p">
        We specialize in a wide array of marketing fields
      </div>

      <div className="friends-container">
        <div className="friend-card">
          <div className="photo">
            <img src={hob} alt="" />
          </div>
          <div className="friend-info">
            <div className="friend-p">Reviews .</div>
            <div className="friend-h">
              The Art and Science behind <br/> Typography
            </div>
          </div>
        </div>

        <div className="friend-card">
          <div className="photo">
            <img src={fil} alt="" />
          </div>
          <div className="friend-info">
            <div className="friend-p">News . Reviews . Technology .</div>
            <div className="friend-h">
              When hobby, passion and <br/>profession one and the same
            </div>
          </div>
        </div>

        <div className="friend-card">
          <div className="photo">
            <img src={custumer} alt="" />
          </div>
          <div className="friend-info">
            <div className="friend-p">Reviews . Top Picks .</div>
            <div className="friend-h">
              5 tips to keep your customers <br />
              happy By Spyro December 22, <br />
              2018
            </div>
          </div>
        </div>
      </div>
      <div className="friend-btn"><Button class = "btn-card" text = "See all posts"/></div>
    </div>
  );
};
export default Pageeleven;
