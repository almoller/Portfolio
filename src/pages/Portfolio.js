import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Project from '../components/Project';
import projects from '../projects.json';

class Portfolio extends Component {
    state = {
      projects
    }
    
    render() {
      return (
        <Container fluid>
        <h2 className='text-center'>Portfolio</h2>
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
            <Col size="lg-6">
              <Jumbotron>
                <h1>2 Cool!</h1>
              </Jumbotron>
            </Col>
            <Col size="lg-6">
              <Jumbotron>
                <h1>3 is best!</h1>
              </Jumbotron>
            </Col>
          </Row>
  
            
  
        </Container>
        
        
      );
    }
  }
  
  export default Portfolio;