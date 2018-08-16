import React from "react";
import { Row, Col } from '../components/Grid';
import badge from '../images/coding-badge-UofU.png';



const Skills = () => (
  <Row>
    <Col size='sm-6'>
      <h1>Web Dev Skills</h1>
        <ul className="skills">
          <li>HTML5/CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>jQuery</li>
          <li>API/JSON</li>
          <li>GitHub</li>
          <li>Heroku</li>
        </ul>
    </Col>
    <Col size='sm-6'>
      <a href="https://www.youracclaim.com/badges/659bc848-aa14-48cb-b208-aa90946c111c/public_url">
        <img src={badge} width="170px" height="170px" alt="badge" />
      </a>
    </Col>
  </Row>
);

export default Skills;