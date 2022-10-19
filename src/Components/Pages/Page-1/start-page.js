import React from "react";
import "./start-page.css";
import rocket from "../../../img/rocket.png";
import Button from "../../Button";
import SVGphone from "../../../img/SVGphone.svg";
import SVGplane from "../../../img/SVGplane.svg";
import SVGfacebook from "../../../img/SVGfacebook.svg";
import SVGp from "../../../img/SVGp.svg";
import SVGtwiter from "../../../img/SVGtwiter.svg";
import SVGin from "../../../img/SVGin.svg";
import wolnaone from "../../../img/wolnaone.png";


const StartPage = () => {
  return (
    <>
    <div className="start-page">
      <header className="header">
        <div className="header-container">
          <div className="contactus">
            <div className="h-phone">
              <div className="phone">
                <img src={SVGphone} alt="" />
              </div>
              <div className="hnumber">+1800-123-4567</div>
            </div>
            <div className="h-phone">
              <div className="phone">
                <img src={SVGplane} alt="" />
              </div>
              <div className="hnumber">info@brandexponents.com</div>
            </div>
          </div>

          <div className="brands">
            <img src={SVGfacebook} alt="" />
            <img src={SVGtwiter} alt="" />
            <img src={SVGin} alt="" />
            <img src={SVGp} alt="" />
          </div>
        </div>
      </header>
      <nav className="navbar">
        <div className="nav-text">SEOFlow</div>
        <ul className="navbar">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> Why SEO? </a>
          </li>
          <li>
            <a href="#"> Services </a>
          </li>
          <li>
            <a href="#"> Team </a>
          </li>
          <li>
            <a href="#"> Pricing </a>
          </li>
          <li>
            <a href="#"> Blog </a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
        </ul>
        <Button class="btn small" text="Enquiry"></Button>
      </nav>
      <div className="info-container">
        <div className="left">
          <div className="left-h">
            <div>
              We’re strategic
              <br />
              <span className="yelow">SEO Marketing</span>
              <br /> agency.
            </div>
          </div>
          <div className="left-p">
            Spyro is a powerful landing pages builder WP <br />
            theme that lets you build high converting landing <br />
            pages using its specially crafted modules clubbed <br />
            inside.
          </div>
          <Button class="btn max" text="Explore Now"></Button>
        </div>
        <div className="right">
          <img src={rocket} alt=""/>
          <div className="right-square">^</div>
        </div>
      </div>
    </div>
    <div className="woln"></div>
    </>
  );
};

export default StartPage;
