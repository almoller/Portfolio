import React from "react";
import { Row, Col } from '../components/Grid';



const AboutDesign = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        As a Meteorologist I discovered a strong interest in Graphic Design.
        While that seems like an odd combination, both are honest interests of
        mine and I desired to have formal training in both fields. I obtained 
        a solid foundation in Graphic Design at Utah Valley University.
        </p>
        <p className='aboutText'>
        I look forward to any opportunity that allows me to put my graphic design 
        skills to use.  It is fun for me and often theraputic to work through the
        design process to obtain a satisfying result.
  
      </p>
    </Col>
    <Col size='md-6'>
    
      <div className='card text-center text-xl-left'>
        <div className='card-body'>

          <h4 className='aboutExperienceJob text-center text-xl-left'>Tueller's Press
            <span><p className='aboutExperienceDate text-center text-xl-left'> 6/2015 - 11/2015</p></span>
          </h4>
          <h6 className='aboutExperienceRole text-center text-xl-left ml-xl-4'>Digital Prepress Specialist</h6>

          <h4 className='aboutExperienceJob text-center text-xl-left'>CityGro
            <p className='aboutExperienceDate text-center text-xl-left'> 11/2015 - 12/2015</p>
          </h4>
          <h6 className='aboutExperienceRole text-center text-xl-left ml-xl-4'>Freelance Graphic Designer</h6>
            
        </div>
      </div>
    </Col>
  </Row>
  </div>
);

export default AboutDesign;