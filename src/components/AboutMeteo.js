import React from "react";
import { Row, Col } from '../components/Grid';



const AboutMeteo = () => (

  <div className='aboutWebContent'>
  
    <Row>
      <Col size='md-6'>
      
        <p className='aboutText'>
          Meteorology has been a strong interest of mine since I was
          a kid.  I have always loved studying and observing weather 
          in all its variety. With this passion, I obtained a solid 
          foundation in Meteorology at the University of Utah.
        </p>
        <p className='aboutText'>
          I was privilaged to work as a Meteorologist with great colleagues
          at the Utah Climate Center. While my duties there were deeply rooted
          in the world of science, some also awakened my interest and desire
          to obtain formal training in design and visual communication.
        </p>

      </Col>
      
      <Col size='md-6'>
    
        <div className='card text-center text-xl-left'>
          <div className='card-body'>

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