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
    <div className='card text-center text-xl-left'>
        <div className='card-body'>

          {/* <h3 className='card-title'>Experience in Meteorology</h3> */}

          <h4 className='aboutExperienceJob text-center text-xl-left'>Utah Climate Center
            <span><p className='aboutExperienceDate text-center text-xl-left'> 8/2006 - 8/2010</p></span>
          </h4>
          <h6 className='aboutExperienceRole text-center text-xl-left ml-xl-4'>Meteorologist</h6>

          <h4 className='aboutExperienceJob text-center text-xl-left'>Midwest Weather Inc.
            <p className='aboutExperienceDate text-center text-xl-left'> 11/2005 - 12/2005</p>
          </h4>
          <h6 className='aboutExperienceRole text-center text-xl-left ml-xl-4'>Weather Observer</h6>
            
        </div>
      </div>
    </Col>
  </Row>
  </div>
);

export default AboutMeteo;