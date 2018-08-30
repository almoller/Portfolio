import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PortfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Skills from '../components/Skills';
import Project from '../components/Project';
import projects from '../jsonFiles/projects.json';


class PortfolioWeb extends Component {
    state = {
      projects
    }
    
    render() {
      return (
        <Container fluid>

          <div className='content'>
          
            <Header />

            <PortfolioNav />

        
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
  
          </div>
            
          <Footer />

        </Container>
        
        
      );
    }
  }
  
  export default PortfolioWeb;