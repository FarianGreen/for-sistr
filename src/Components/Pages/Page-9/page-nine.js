import React  from "react";
import CardModels from "../../Modules/Card-models";
import Card from "./Card";
import "./page-nine.css";

const cards=[new CardModels]
const items = [
  { name: "Silver", cash: "159" },
  { text: "Key Words Optimized", success: true, id: 1 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 2 },
  { text: "Weekly Reporting", success: true, id: 3 },
  { text: "Key Words Optimized", success: true, id: 4 },
  { text: "Top 10 Ranking Guarantee", success: true, id: 5 },
  { text: "Weekly Reporting", success: false, id: 6 },
  { text: "Key Words Optimized", success: false, id: 7 },
  { text: "Top 10 Ranking Guarantee", success: false, id: 8 },
];
class PageNine extends React.Component {
  
  render() {
  return (
    <div className="page-nine">
      <div className="nine-h">
        <div class="block-info-seven">
          <div class="seven-h">Pricing & Plans</div>
          <div class="seven-p">We offer best price in the market</div>
        </div>
      </div>
      <div className="cards-container">
        <Card name={"Silver"} cash={"159"}  />
        <Card name={"Gold"} cash={"399"} />
        <Card name={"Platinum"} cash={"549"} />
       
      </div>
    </div>
  );
};
}
export default PageNine;
