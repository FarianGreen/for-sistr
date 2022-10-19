import React from "react";
import "./page-five.css";
import Button from "../../Button";
import check from "../../../img/check.png";
import A from "../../../img/A.png";
import dash from "../../../img/dash.png";
import planet from "../../../img/planet.png";
import BigSquare from "./BigSquare";

const PageFive = () => {
  return (
    <div className="page-five">
      <div className="page-three-conatiner">
        <div className="five-block">
          <div className="five-text-h">Conversion rate optimization</div>
          <div className="five-text-p">
            Spyro is a powerful landing pages builder WordPress theme that lets
            you build high converting landing pages using its specially crafted
            modules clubbed inside.
          </div>
          <Button class="btn max" text="Get a quote" />
        </div>
        <div className="four-squares">
          <BigSquare
            class={"square trans"}
            image={check}
            title={"CRO Techniques"}
            text={
              "Spyro is a powerful landing pages builder WordPress theme that lets you build high converting pages."
            }
          />
          <BigSquare
            class={"square"}
            image={dash}
            title={"User Recordings"}
            text={
              "Built by keeping Advertisers, Marketers, Lead Generation Companies, and Individuals."
            }
          />
          <BigSquare
            class={"square trans"}
            image={A}
            title={"A/B Split Testing"}
            text={
              "The theme comes with 10+ stunning pre-built demos which you can use as your website."
            }
          />
          <BigSquare
            class={"square"}
            image={planet}
            title={"Better Website ROI"}
            text={
              "Spyro is a marketing landing page WP theme, that lets you build stunning high performance."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PageFive;
