import React from "react";

const Project = props => (
  
    <div className="project">
    <div className="projectLink">
      <a className="projectImage" href={props.url}>
        <img src={props.image} alt={props.header}  />
        <h5 className="title">{props.header}</h5>
      </a>
      </div>
      <p className="info">{props.info}</p>
    </div>

);

export default Project;