import React from "react";
import { Row, Col } from '../components/Grid';



const AboutMeteo = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        I obtained a solid foundation in Meteorology at 
        the University of Utah.
      </p>
    </Col>
    <Col size='md-6'>
      <div className='weather'>
      <h3>Experience in Meteorology</h3>
      <p>I love clouds and rain and snow and storms</p>
        
      </div>
    </Col>
  </Row>
  </div>
);

export default AboutMeteo;