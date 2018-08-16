import React from "react";
import { Row, Col } from '../components/Grid';



const AboutDesign = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        I obtained a solid foundation in Graphic Design at 
        the Utah Valley University.
      </p>
    </Col>
    <Col size='md-6'>
      <div className='card text-center'>
        <div className='card-body'>
          <h3 className='card-title'>Experience in Design</h3>
          <ul className='list-group'>
            <li className='list-group-item'>CityGro<p>freelance designer</p></li>
            <li className='list-group-item'>Tuellers Press<p>digital prepress specialist</p></li>
          </ul>
        </div>
      </div>
    </Col>
  </Row>
  </div>
);

export default AboutDesign;