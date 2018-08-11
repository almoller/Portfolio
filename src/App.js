import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import logo from './images/alan-logo.png';
import { Container, Row, Col } from './components/Grid';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';



class App extends Component {
  
  render() {
    return (
      <Router>
        <Container fluid>
        <div className="content">
          <header>
            <div className='logoDiv'>
              <img className='logo' src={logo} alt='logo' />
            </div>
            <nav className="navBar">
              <ul>
                <li>
                  <NavLink className="link" to="/"
                      exact activeStyle={{
                        fontWeight: '500',
                        background: 'rgba(175, 175, 175, 0.4)'
                      }}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/about"
                      exact activeStyle={{
                        fontWeight: '500',
                        background: 'rgba(175, 175, 175, 0.4)'
                      }}>About</NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/contact"
                      exact activeStyle={{
                        fontWeight: '500',
                        background: 'rgba(175, 175, 175, 0.4)'
                      }}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          

          <Route path="/" exact component={Portfolio} />
          <Route path="/about" exact strict component={About}/>
          <Route path="/contact" exact strict component={Contact}/>


        </div>

          <footer className="footer">
            <Row>
              <Col size='sm-12'>
              <div className="footerLinks">
                <Link className="footerLink" to="/">Portfolio</Link>
                <Link className="footerLink" to="/about">About</Link>
                <Link className="footerLink" to="/contact">Contact</Link>
              </div>
                <p>&copy; 2018 Alan Moller</p>
              </Col>
            </Row>
          </footer>

        </Container>
      
      </Router>
      
    );
  }
}

export default App;
