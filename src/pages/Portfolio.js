import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Skills from '../components/Skills';
import Project from '../components/Project';
import projects from '../projects.json';
// import badge from '../images/coding-badge-UofU.png';


class Portfolio extends Component {
    state = {
      projects
    }
    
    render() {
      return (
        <Container fluid>
        <h2 className='text-center pageTitle'>Portfolio</h2>
        <h3 className='pageSubTitle'>Web Development</h3>
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
  
            
  
        </Container>
        
        
      );
    }
  }
  
  export default Portfolio;