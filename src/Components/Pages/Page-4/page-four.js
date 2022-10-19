import React from "react";
import "./page-four.css";
import diagram from "../../../img/diagram.png";
import BlockText from "../../Block-texts";
import Frame from "../../../img/Frame.png";
import Man from "../../../img/Man.png";

class PageFour extends React.Component {
  render() {
    return (
      <div className="page-three-conatiner">
        <div className="left-container">
          <BlockText
            yellowtext={"Why we’re the best in Industry?"}
            htext={"Top reasons for choosing Spyro SEO agency "}
            ptext={
              " Spyro is a powerful landing pages builder WordPress theme that lets you build high converting landing pages using its specially crafted modules clubbed inside."
            }
          />
          <div className="left-square-container">

              <div className="satisfaction">
                <img src={Frame} />
                <div className="box-info">
                  <div className="number">98.5%</div>
                  <div className="text">Satisfaction</div>
                </div>
              </div>

              <div className="satisfaction">
                <img src={Man} />
                <div className="box-info">
                  <div className="number">150%</div>
                  <div className="text">Conversion</div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="right-container">
          <img src={diagram} />
        </div>
      </div>
    );
  }
}

export default PageFour;
