import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DesignSection from '../components/DesignSection';
import designsections from '../design-sections.json';


class PortfolioDesign extends Component {
    state = {
      designsections
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
              {this.state.designsections.map(designsection => (
                <DesignSection
                  id={designsection.id}
                  key={designsection.id}
                  header={designsection.header}
                  image={designsection.image}
                  info={designsection.info}
                  url={designsection.url}
                />
              ))}
            </div>
            </Col>
          </Row>
  
                      
          <Footer />

        </Container>
        
        
      );
    }
  }
  
  export default PortfolioDesign;