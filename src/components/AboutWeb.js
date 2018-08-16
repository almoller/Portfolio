import React from "react";
import { Row, Col } from '../components/Grid';
import badge from '../images/coding-badge-UofU.png';



const AboutWeb = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        I obtained a solid foundation in web development at 
        the University of Utah. Special thanks to my family 
        and the Church of Jesus Christ of Latter-Day Saints 
        for their support of me in persuit of this education.
      </p>
    </Col>
    <Col size='md-6'>
      <a href="https://www.youracclaim.com/badges/659bc848-aa14-48cb-b208-aa90946c111c/public_url">
        <img src={badge} width="75px" height="75px" alt="badge" />
      </a>
    </Col>
  </Row>
  </div>
);

export default AboutWeb;