import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
// import Jumbotron from '../components/Jumbotron';
import AboutWeb from '../components/AboutWeb';
import AboutDesign from '../components/AboutDesign';
import profilePic from '../images/alan-profile-pic.jpg';
import AboutMeteo from '../components/AboutMeteo';

class About extends Component {

  render() {
    return (
      <Container>
      
      <h2 className='text-center pageTitle'>About</h2>
      <div className='text-center text-md-left aboutSection'>
        <Row>
          <Col size='md-4'>
            <div className='profilePic mt-md-5 mt-lg-1'>
              <img src={profilePic} width='200px' height='200px' alt='profile pic' />
            </div>
          </Col>
          <Col size='md-8'>
            <p className='aboutText'>
              Utah has been my home throughout my life and I have 
              always enjoyed exploring its many outdoor recreational 
              opportunities. From the highest peaks of the Northern 
              Utah mountains to the red rock canyons of Southern Utah 
              I enjoy it all via hiking, backpacking, snowshoeing, 
              and skiing.
            </p>
            <p className='aboutText'>
              My educational background includes Meteorology, 
              Graphic Design, and now Web Development. I am excited at 
              the prospect of of developing new skills and gaining new 
              perspectives on life and work. My different educational 
              backgrounds work together and build upon my unique 
              skill-set, improving my overall potential to innovatively 
              problem-solve and contribute to sociey.
            </p>
          </Col>
        </Row>
        
      </div>

      <div className='aboutWebSection'>
        <Row>
          <Col size='12'>
            <h3 className='aboutSubTitle text-center text-md-left'>Web Development</h3>
            <h6 className='aboutEduDate text-center text-md-left'>University of Utah 2018</h6>
            <AboutWeb />
          </Col>
        </Row>

        <Row>
          <Col size='12'>
            <h3 className='aboutSubTitle text-center text-md-left'>Graphic Design</h3>
            <h6 className='aboutEduDate text-center text-md-left'>Utah Valley University 2012</h6>
            <AboutDesign />
          </Col>
        </Row>

        <Row>
          <Col size='12'>
            <h3 className='aboutSubTitle text-center text-md-left'>Meteorology</h3>
            <h6 className='aboutEduDate text-center text-md-left'>University of Utah 2006</h6>
            <AboutMeteo />
          </Col>
        </Row>
      </div>

      </Container>
    );
  }

}

export default About;