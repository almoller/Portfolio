import React from "react";
import { Row, Col } from '../components/Grid';



const AboutDesign = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        I obtained a solid foundation in Graphic Design at 
        the Utah Valley University. I obtained a solid foundation in Graphic Design at 
        the Utah Valley University. I obtained a solid foundation in Graphic Design at 
        the Utah Valley University.
        </p>
        <p className='aboutText'>
        I obtained a solid foundation in Graphic Design at 
        the Utah Valley University.
        I obtained a solid foundation in Graphic Design at 
        the Utah Valley University.
      </p>
    </Col>
    <Col size='md-6'>
    
      <div className='card text-center text-xl-left'>
        <div className='card-body'>

          {/* <h3 className='card-title'>Experience in Design</h3> */}

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