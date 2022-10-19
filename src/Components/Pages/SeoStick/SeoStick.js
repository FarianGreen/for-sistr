import React from "react";
import "./SeoStick.css";
import BlockText from "../../Block-texts";
import PlaneNotes from "../../Plane-notes";
import paperplane from "../../../img/paperplane.png";
import spacerocket from "../../../img/spacerocket.png";

class SeoStick extends React.Component {
  state = [
    { yellowtext: "We’re SEO & Marketing Agency" },
    { htext: "Building an effective conversion strategy" },
    {
      ptext:
        "A great marketing landing page plays a major role to increase conversion rates in order to reach your marketing or business growth goals. It helps you to Introduce your digital campaign to visitors in a more professional way.",
    },
    { img: paperplane },
    { img: spacerocket },
  ];

  render() {
    const text = this.state;
    const el = text.map((item) => {
      return <BlockText {...item} />;
    });
    return (
      <div>
        <div className="stick-container">
          <div className="left-block">{el}</div>
          <div className="right-block">
            <PlaneNotes
              hright={"Digital Marketing"}
              pright={
                "It’s a modern business theme, that lets you build stunning high performance websites using a fully visual interface."
              }
              image={this.state[3].img}
            />
            <PlaneNotes
              hright={"Digital Marketing"}
              pright={
                "It’s a modern business theme, that lets you build stunning high performance websites using a fully visual interface."
              }
              image={this.state[4].img}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SeoStick;
