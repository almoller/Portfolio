import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Project from '../components/Project';
import projects from '../projects.json';
import badge from '../images/coding-badge-UofU.png';


class Portfolio extends Component {
    state = {
      projects
    }
    
    render() {
      return (
        <Container fluid>
        <h2 className='text-center pageTitle'>Portfolio</h2>
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
                <Row>
                  <Col size='sm-6'>
                    <h1>Web Dev Skills</h1>
                    <ul>
                      <li>HTML5/CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </Col>
                  <Col size='sm-6'>
                    <a href="https://www.youracclaim.com/badges/659bc848-aa14-48cb-b208-aa90946c111c/public_url">
                      <img src={badge} width="150px" height="150px" alt="badge" />
                    </a>
                  </Col>
                </Row>
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