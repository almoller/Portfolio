import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import DesignSection from '../components/DesignSection';
import designsections from '../jsonFiles/design-sections.json';


class PortfolioDesign extends Component {
    state = {
      designsections
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />

       
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