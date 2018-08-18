import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import logo from '../images/alan-logo.png';


class Landing extends Component {
    
    
    render() {
      return (
        <Container fluid>
        <div className='landingWrapper'>

          <div className='landingLogo text-center'>
            <img src={logo} alt="logo image" />
          </div>

          <p className='landingText text-center'>
            Welcome to my profile page. I hope you enjoy what you find.
            This application was build with React and React-Router-Dom.
          </p>

          <div className='landingLinksWrapper'>
        
         
            <Link className='landingLink' to="/portfolio">
              <div className='landingDiv'>
                <h1 className='landingDivTitle'>Portfolio</h1>
              </div>
            </Link>

            <Link className='landingLink' to="/about">
              <div className='landingDiv'>
                <h1 className='landingDivTitle'>About</h1>
              </div>
            </Link>

            <Link className='landingLink' to="/contact">
              <div className='landingDiv'>
                <h1 className='landingDivTitle'>Contact</h1>
              </div>
            </Link>
            
            
            
        </div>
        </div>
        </Container>
        
        
      );
    }
  }
  
  export default Landing;