import React from "react";
import { Container } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import linkedin from '../images/icon-linkedin.png';
import github from '../images/icon-github.png';

const Contact = () => (
  <Container fluid>

    <Header />
    
    <div className='text-center'>
      <h2 className='pageTitle'>Contact</h2>

      <div className='icon'>
        <img src={linkedin} alt='linked-in icon' />
      </div>

      <div className='icon'>
        <img src={github} alt='github icon' />
      </div>
    </div>

    <Footer />
  </Container>

);

export default Contact;