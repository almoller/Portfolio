import React from "react";

const PortfolioImages = props => (
  
  <div className={props.class}>
    <img src={props.image} alt={props.name}  />
  </div>

);

export default PortfolioImages;

