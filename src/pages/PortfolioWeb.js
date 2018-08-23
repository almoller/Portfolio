import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Skills from '../components/Skills';
import Project from '../components/Project';
import projects from '../projects.json';


class PortfolioWeb extends Component {
    state = {
      projects
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

        <h2 className='text-center pageTitle'>Portfolio</h2>
        <div className='pageSubTitleContainer'>
        <NavLink to="/portfolio/web" activeStyle={{background: 'rgba(175, 175, 175, 0.3)'}}>
        <h3 className='pageSubTitle'>Web Development</h3>
        </NavLink>
        <NavLink to="/portfolio/design" activeStyle={{background: 'rgba(175, 175, 175, 0.3)'}}>
        <h3 className='pageSubTitle'>Graphic Design</h3>
        </NavLink>
        </div>
          <Row>
            <Col size='sm-12'>
            <div className="projectSection">
              {this.state.projects.map(project => (
                <Project
                  id={project.id}
                  key={project.id}
                  header={project.header}
                  image={project.image}
                  info={project.info}
                  url={project.url}
                />
              ))}
            </div>
            </Col>
          </Row>
  
          <Row>
            <Col size="12">
              <Jumbotron>
                <Skills />
              </Jumbotron>
            </Col>
            
          </Row>
  
            
          <Footer />

        </Container>
        
        
      );
    }
  }
  
  export default PortfolioWeb;