import React from "react";
import "./last-page.css";
import smile from "../../../img/smile.png";
import Itemform from "./form";
import seotitle from "../../../img/seotitle.png";
import SVGinst from "../../../img/SVGinst.svg";
import SVGfacebook from "../../../img/SVGfacebook.svg";
import SVGtwiter from "../../../img/SVGtwiter.svg";

const LastPage = () => {
  return (
    <div className="last">
      <div className="last-conatiner">
        <div className="left-block">
          <img src={smile} alt="" />
        </div>
        <div className="last-block">
          <div className="enqu-info">
            <div className="enqutitle">Enquiry Form</div>
            <div className="enquesubtitle">
              Dont be shy, Just tell us about yourself and we’ll figure out the
              best <br /> option for you and your project. Dont like Filling up
              forms ? Mail us <br /> then{" "}
              <span className="yelseo">Company@email.com</span>
            </div>
          </div>
          <Itemform />
        </div>
      </div>
      <hr />
      <div className="footer">
        <div className="seotitile">
          <div className="">
            <img src={seotitle} alt="" />
          </div>
          <div className="subseo">
            Spyro is a modern marketing
            <br /> landing page WP theme. that
            <br /> lets you build websites
          </div>
        </div>
        <div className="q-links">
          <div className="links">Quick Links</div>
          <li className="link">Why SEO?</li>
          <li className="link">Service</li>
          <li className="link">Our Team</li>
          <li className="link">Our Team</li>
        </div>

        <div className="q-links">
          <div className="links">Services</div>
          <li className="link">SEO & Marketing</li>
          <li className="link">Email Marketing</li>
          <li className="link">Mobile Marketing</li>
          <li className="link">Google Ads</li>
        </div>

        <div className="q-links">
          <div className="links">Get in touch</div>
          <div className="link">1800-123-4567</div>
          <div className="link">
            HSR Layout
            <br />
            21st Cross, Bangalore - 56010
          </div>
          <div className="link">Info@brandexponents.com</div>
        </div>
        <div className="brand">
          <div className="links">Follow us</div>
          <div className="brands-container">
            <img src={SVGfacebook} alt="" />
            <img src={SVGtwiter} alt="" />
            <img src={SVGinst} alt="" />
          </div>
        </div>
      </div>
      <hr className="power-by" />
      <div className="flowcontainer">
        <div className="fix">
          © SEOFlow 2021. All Rights Reserved. Changelog License Info
        </div>
        <div className="fix">
          Powered by <span className="yelseo">Webflow</span>
        </div>
      </div>
    </div>
  );
};
export default LastPage;
