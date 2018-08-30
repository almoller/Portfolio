import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import Header from '../components/Header';
import PorfolioNav from '../components/PorfolioNav';
import Footer from '../components/Footer';
import PortfolioImages from '../components/PortfolioImages';
import escalanteTexturesImages from '../jsonFiles/images-escalanteTextures.json';
import DesignLinks from '../components/DesignLinks';



class EscalanteTextures extends Component {
    state = {
      escalanteTexturesImages
    }
    
    render() {
      return (
        <Container fluid>
          
          <Header />

          <PorfolioNav />
          <DesignLinks />

       
       <Row>
            <Col size='sm-12'>
            <h1 className="designSectionTitle text-center">Escalante Textures</h1>

            <div className="images-section">
              {this.state.escalanteTexturesImages.map(texture => (
                <PortfolioImages
                  id={texture.id}
                  key={texture.id}
                  name={texture.name}
                  image={texture.image}
                  class={texture.class}
                  info={texture.info}
                  url={texture.url}
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
  
  export default EscalanteTextures;