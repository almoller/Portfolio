import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import typeImages from '../jsonFiles/images-typography.json';
import DesignLinks from '../components/DesignLinks';



class Typography extends Component {
    state = {
      typeImages
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />
          <DesignLinks />

       
          <Row>
            <Col size='sm-12'>
            <h1 className="designSectionTitle text-center">Typography</h1>

            <div className="images-section">
              {this.state.typeImages.map(typeImage => (
                <PortfolioImages
                  id={typeImage.id}
                  key={typeImage.id}
                  name={typeImage.name}
                  image={typeImage.image}
                  class={typeImage.class}
                  info={typeImage.info}
                  url={typeImage.url}
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
  
  export default Typography;