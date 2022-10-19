import React from "react";

const Cardmodule = (props) => {
  return (
    <div className="card">
      <div className="name-card">{props.name}</div>
      <div className="card-price">
        $<div className="cash">{props.cash}</div>/Per Month
      </div>
      <div class="free_items">
        <ul class="card_item">
          <li key={id}>
            <span class="material-icons-outlined">
              {props.success ? "done" : "close"}
            </span>
            {text}
          </li>
        </ul>
      </div>
      <div className="flash">
        <Button class="btn-card" text="Get Started" />
      </div>
    </div>
  );
};
export default Cardmodule;
