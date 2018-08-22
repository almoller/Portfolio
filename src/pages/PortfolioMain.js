import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import webIMG from '../images/portfolioWeb.jpg';


class PortfolioMain extends Component {
    
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <h2 className='text-center pageTitle'>Portfolio</h2>

          <div className='portfolioMainWrapper'>
                  
            <Link className='portfolioLink' to="/portfolio/web">
              <div className='portfolioMainWeb'>
                <h1 className='portfolioMainDivTitle'>Web</h1>
              </div>
            </Link>


              <div className='portfolioMainDesign'>
                <h1 className='portfolioMainDivTitle'>Design</h1>
              </div>


              {/* <div className='portfolioMainDiv'>
                <h1 className='portfolioMainDivTitle'>Weather</h1>
              </div> */}


        </div>

          <Footer />

        </Container>
        
        
      );
    }
  }
  
  export default PortfolioMain;