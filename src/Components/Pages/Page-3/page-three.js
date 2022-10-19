import React from "react";
import "./page-three.css";
import BlockText from "../../Block-texts";
import laptop from "../../../img/laptop.png";

class PageThree extends React.Component {
  state = [
    { content: "Connect with Customers" },
    { content: "Increase Traffic" },
    { content: "Online Reputation" },
    { content: "Build brand value" },
    { content: "Revenue Generating" },
    { content: "Increase Conversion" },
    { content: "Real-Time Analytics" },
  ];
  render() {
    const cont = this.state;
    const elem = cont.map((item) => {
      return (
        <div className="content-container">
          <span class="material-icons-outlined">done</span>
          <div className="content">{item.content}</div>
        </div>
      );
    });
    return (
      <div className="page-three-conatiner">
        <div className="left-container">
          <img src={laptop} />
        </div>

        <div className="right-container">
          <BlockText
            yellowtext={"We’re SEO & Marketing Agency"}
            htext={"Appear on the front page of Google!"}
            ptext={
              "Spyro is a powerful landing pages builder WordPress theme that lets you build high converting landing pages using its specially crafted modules clubbed inside."
            }
          />

          <div className="check">{elem}</div>
        </div>
      </div>
    );
  }
}

export default PageThree;
