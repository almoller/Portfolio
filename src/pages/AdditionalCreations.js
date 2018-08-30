import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import additionalCreationsImages from '../jsonFiles/images-additionalCreations.json';
import DesignLinks from '../components/DesignLinks';



class AdditionalCreations extends Component {
    state = {
      additionalCreationsImages
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />
          <DesignLinks />

       
          <Row>
            <Col size='sm-12'>
            <h1 className="designSectionTitle text-center">Additional Creations</h1>

            <div className="images-section">
              {this.state.additionalCreationsImages.map(additionalImage => (
                <PortfolioImages
                  id={additionalImage.id}
                  key={additionalImage.id}
                  name={additionalImage.name}
                  image={additionalImage.image}
                  class={additionalImage.class}
                  info={additionalImage.info}
                  url={additionalImage.url}
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
  
  export default AdditionalCreations;