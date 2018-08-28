import React from "react";
import { Link } from "react-router-dom";

const DesignSection = props => (
  
  <div className="project">
    <div className="projectLink">
      <Link className="projectImage" to={props.url}>
        <img src={props.image} alt={props.header}  />
        <h5 className="title">{props.header}</h5>
      </Link>
    </div>
    <p className="info">{props.info}</p>
  </div>  

);

export default DesignSection;

