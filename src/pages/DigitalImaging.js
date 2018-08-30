import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import digitalImagingImages from '../jsonFiles/images-digital-Imaging.json';
import DesignLinks from '../components/DesignLinks';



class DigitalImaging extends Component {
    state = {
      digitalImagingImages
    }
    
    render() {
      return (

        <Container fluid>

          <div className='content'>
          
            <Header />

            <PorfolioNav />
            <DesignLinks />

       
            <Row>
              <Col size='sm-12'>
                
                <h1 className="designSectionTitle text-center">Digital Imaging</h1>

                <div className="images-section">
                  {this.state.digitalImagingImages.map(digitalImage => (
                    <PortfolioImages
                      id={digitalImage.id}
                      key={digitalImage.id}
                      name={digitalImage.name}
                      image={digitalImage.image}
                      class={digitalImage.class}
                      info={digitalImage.info}
                      url={digitalImage.url}
                    />
                  ))}
                </div>

              </Col>
            </Row>
  
          </div>
                      
          <Footer />

        </Container>        
        
      );
    }
  }
  
  export default DigitalImaging;