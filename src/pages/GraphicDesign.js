import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import graphicDesignImages from '../jsonFiles/images-graphicDesign.json';
import DesignLinks from '../components/DesignLinks';



class GraphicDesign extends Component {
    state = {
      graphicDesignImages
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />
          <DesignLinks />

       
          <Row>
            <Col size='sm-12'>
            <h1 className="designSectionTitle text-center">Graphic Design</h1>

            <div className="images-section">
              {this.state.graphicDesignImages.map(GDImage => (
                <PortfolioImages
                  id={GDImage.id}
                  key={GDImage.id}
                  name={GDImage.name}
                  image={GDImage.image}
                  class={GDImage.class}
                  info={GDImage.info}
                  url={GDImage.url}
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
  
  export default GraphicDesign;