import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from '../components/Grid';
import logo from '../images/alan-logo.png';


class Landing extends Component {
    
    
    render() {
      return (
        
        <div className='landingWrapper'>

          <div className='landingLogo text-center'>
            <img src={logo} alt="logo" />
          </div>

          <div className='landingLinksWrapper'>
        
            <Link className='landingLink' to="/portfolio">
                <h1 className='landingDivTitle'>Portfolio</h1>
            </Link>

            <Link className='landingLink' to="/about">
                <h1 className='landingDivTitle'>About</h1>
            </Link>

            <Link className='landingLink' to="/contact">
                <h1 className='landingDivTitle'>Contact</h1>
            </Link>
        
          </div>
          
          <p className='landingText'>
            Welcome to my portfolio site. I hope you enjoy what you find.
            This site contains a collection of works I've completed as a
            Web Developer and a Graphic Designer.
          </p>
          <p className='landingText'> 
            I recently completed an 
            intensive course in web development and decided to put my skills
            to use by creating this portfolio site to better house and display 
            my work. This application was build with React and React-Router-Dom.
          </p>
          
          
        </div>
        
        
        
      );
    }
  }
  
  export default Landing;