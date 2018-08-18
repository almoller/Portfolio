import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Jumbotron from '../components/Jumbotron';
// import  from '../images/coding-badge-UofU.png';


class Landing extends Component {
    
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <h2 className='text-center pageTitle'>Portfolio</h2>

        <div className='portfolioMainWrapper'>
        
          {/* <Row>
            <Col size='12'> */}
            <Link to="/portfolio/web">
              <div className='portfolioMainDiv'>
                <h1 className='portfolioMainDivTitle'>Web</h1>
              </div>
            </Link>

              <div className='portfolioMainDiv'>
                <h1 className='portfolioMainDivTitle'>Design</h1>
              </div>

              <div className='portfolioMainDiv'>
                <h1 className='portfolioMainDivTitle'>Weather</h1>
              </div>
            
            {/* </Col>
          </Row>   */}
            
        </div>

          <Footer />

        </Container>
        
        
      );
    }
  }
  
  export default Landing;