import React from "react";

const Project = props => (
  
    <div className="project">
      <a className="projectImage" href={props.url}>
        <img src={props.image} alt={props.header}  />
      </a>
      <h5 className="title">{props.header}</h5>
      <p className="info">{props.info}</p>
    </div>

);

export default Project;