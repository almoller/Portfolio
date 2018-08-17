import React from "react";
import linkedin from '../images/icon-linkedin.png';
import github from '../images/icon-github.png';

const Contact = props => (
  <div className='text-center'>
    <h2 className='pageTitle'>Contact</h2>

    <div className='icon'>
      <img src={linkedin} alt='linked-in icon' />
    </div>

    <div className='icon'>
      <img src={github} alt='github icon' />
    </div>
  </div>   
);

export default Contact;