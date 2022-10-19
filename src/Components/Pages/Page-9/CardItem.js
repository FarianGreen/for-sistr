import React from "react";

class CardItem extends React.Component {
  render() {
    const check = success ? "done" : "close" ;
  return (
    
    <span>{check}</span>
   
  );
};
}
export default CardItem;
