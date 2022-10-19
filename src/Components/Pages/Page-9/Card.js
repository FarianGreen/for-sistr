import React from "react";
import Button from "../../Button";

class Card extends React.Component {
  items = [
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

  render() {
    const elements = this.items.map(({ text, id, success }) => {
      return (
        <li key={id}>
          <span class="material-icons-outlined">
            {success ? "done" : "close"}
          </span>
          {text}
        </li>
      );
    });

    return (
      <div className="card">
        <div className="name-card">{this.props.name}</div>
        <div className="card-price">
          $<div className="cash">{this.props.cash}</div>/Per Month
        </div>
        <div class="free_items">
          <ul class="card_item">{elements}</ul>
        </div>
        <div className="flash">
          <Button class="btn-card" text="Get Started" />
        </div>
      </div>
    );
  }
}

export default Card;
