import React from "react";
import { Row, Col } from '../components/Grid';
import badge from '../images/coding-badge-UofU.png';



const AboutWeb = () => (
  <div className='aboutWebContent'>
  <Row>
    <Col size='md-6'>
      <p className='aboutText'>
        I obtained a solid foundation in web development at 
        the University of Utah. I am thankful to my family 
        and the Church of Jesus Christ of Latter-Day Saints 
        for their support of me in persuit of this education.
      </p>
      <p className='aboutText'>
        As I sought to add to my skills as a graphic designer 
        it became clear that becoming educated in web development 
        would be an excellent addition to my skill set. My interest 
        in design easily translates to an interest in web development 
        as principles of design are an important aspect of any web
        layout.           
      </p>
    </Col>
    <Col size='md-6'>
    <div className='text-center'>
      <a href="https://www.youracclaim.com/badges/659bc848-aa14-48cb-b208-aa90946c111c/public_url">
        <img src={badge} width="150px" height="150px" alt="badge" />
      </a>
      </div>
    </Col>
  </Row>
  </div>
);

export default AboutWeb;