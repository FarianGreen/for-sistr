import React from "react";
import "./touch.css";
import geo from "../../../img/geo.png";
import phonebook from "../../../img/phonebook.png";
import envelope from "../../../img/envelope.png";

const Touch = () => {
  return (
    <div className="touch">
      <div className="touchinfo">
        <div className="seven-h">Get in touch</div>
        <div className="seven-p">Let us know know about your requirements</div>
      </div>
      <div className="touch-container">
        <div className="touch-box">
          <div className="touch-img">
            <img src={geo} alt="" />
          </div>
          <div className="touch-name">Address</div>
          <div className="subtitle">
            Express Chambers II Spaces <br /> Works, Level 5, Royapettah, <br />
            Chennai – 600014
          </div>
        </div>

        <div className="touch-box">
          <div className="touch-img">
            <img src={phonebook} alt="" />
          </div>
          <div className="touch-name">Phone</div>
          <div className="subtitle">
            Enquiry: 1800-123-4567 <br />
            Order: 2400-480-894
          </div>
        </div>

        <div className="touch-box">
          <div className="touch-img">
            <img src={envelope} alt="" />
          </div>
          <div className="touch-name">Address</div>
          <div className="subtitle">
            help@brandexponent.com <br />
            support@brandexponent.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
