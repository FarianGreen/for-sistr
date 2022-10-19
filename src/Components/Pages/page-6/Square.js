import React from "react";

const Square = (props) => {
  return (
    <div className="seo-square">
      <div className="seo-img">
        <img src={props.image} />
      </div>
      <div className="seo-text">{props.text}</div>
      <div className="seo-yellow-square"></div>
    </div>
  );
};
export default Square;
