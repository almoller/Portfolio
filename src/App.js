import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Container } from './components/Grid';
import PortfolioMain from './pages/PortfolioMain';
import PortfolioWeb from './pages/PortfolioWeb';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';



class App extends Component {
  
  render() {
    return (
      <Router>
        <Container fluid>
          
          

          <Route path="/" exact component={Landing} />
          <Route path="/about" exact strict component={About}/>
          <Route path="/contact" exact strict component={Contact}/>
          <Route path="/portfolio" exact strict component={PortfolioMain}/>
          <Route path="/portfolio/web" component={PortfolioWeb}/>




          

        </Container>
      
      </Router>
      
    );
  }
}

export default App;
