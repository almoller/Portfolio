import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import photographyImages from '../jsonFiles/images-photography.json';
import DesignLinks from '../components/DesignLinks';



class Photography extends Component {
    state = {
      photographyImages
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />
          <DesignLinks />

       
          <Row>
            <Col size='sm-12'>
            <h1 className="designSectionTitle text-center">Photography</h1>

            <div className="images-section">
              {this.state.photographyImages.map(photo => (
                <PortfolioImages
                  id={photo.id}
                  key={photo.id}
                  name={photo.name}
                  image={photo.image}
                  class={photo.class}
                  info={photo.info}
                  url={photo.url}
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
  
  export default Photography;