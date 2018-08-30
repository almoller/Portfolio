import React from "react";
import { Container } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import linkedin from '../images/icon-linkedin.png';
import github from '../images/icon-github.png';

const Contact = () => (
  <Container fluid>

    <div className='content'>

      <Header />

      <div className='text-center'>

        <h2 className='pageTitle'>Contact</h2>

        <div className='contactText'>
          <p>
            Please feel free to contact me via email or connect
            with me on LinkedIn or Github.
          </p>

          <p className='email'>
            moller.alan@gmail.com
          </p>
        </div>

        <div className='iconSection'>

          <a className='icon' href="https://www.linkedin.com/in/alan-moller-ab7886b">
            <img src={linkedin} alt='linked-in icon' />
          </a>

          <a className='icon' href="https://github.com/almoller">
            <img src={github} alt='github icon' />
          </a>
        
        </div>

      </div>

    </div>

    <Footer />
    
  </Container>

);

export default Contact;