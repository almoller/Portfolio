import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col } from '../components/Grid';
// import Jumbotron from '../components/Jumbotron';
// import  from '../images/coding-badge-UofU.png';


class Landing extends Component {
    
    
    render() {
      return (
        // <Container fluid>
        <div className='landingWrapper'>
        
          {/* <Row>
            <Col size='12'> */}

              <div className='landingDiv'>
                <h1 className='landingDivTitle'>Web</h1>
              </div>

              <div className='landingDiv'>
                <h1 className='landingDivTitle'>Design</h1>
              </div>

              <div className='landingDiv'>
                <h1 className='landingDivTitle'>Weather</h1>
              </div>
            
            {/* </Col>
          </Row>   */}
            
        </div>
        // </Container>
        
        
      );
    }
  }
  
  export default Landing;