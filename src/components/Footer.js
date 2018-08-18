import React from "react";
import { Row, Col } from '../components/Grid';
import { Link } from 'react-router-dom';



const Footer = () => (
  <footer className="footer">
    <Row>
      <Col size='sm-12'>
        <div className="footerLinks">
          <Link className="footerLink" to="/portfolio">Portfolio</Link>
          <Link className="footerLink" to="/about">About</Link>
          <Link className="footerLink" to="/contact">Contact</Link>
        </div>
        <p>&copy; 2018 Alan Moller</p>
      </Col>
    </Row>
  </footer>
);

export default Footer;