import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import typography from '../images/designSections/typography.jpg';
import graphicDesign from '../images/designSections/graphicDesign.jpg';
import digitalImaging from '../images/designSections/Broads-Fork.jpg';
import photography from '../images/designSections/photography.jpg';
import escalanteTextures from '../images/designSections/escalante-2.jpg';
import additionalCreations from '../images/designSections/3d.jpg';



class DesignLinks extends Component {
    
    
    render() {
      return (
        
        <div className="designLinks-container">

          <NavLink className="designLink" to="/portfolio/design/typography" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={typography} alt="Typography Link"/>
          </NavLink>

          <NavLink className="designLink" to="/portfolio/design/graphic-design" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={graphicDesign} alt="Graphic Design Link"/>
          </NavLink>

          <NavLink className="designLink" to="/portfolio/design/digital-imaging" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={digitalImaging} alt="Digital Imaging Link"/>
          </NavLink>

          <NavLink className="designLink" to="/portfolio/design/photography" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={photography} alt="Photography Link"/>
          </NavLink>

          <NavLink className="designLink" to="/portfolio/design/escalante-textures" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={escalanteTextures} alt="Ecalante Textures Link"/>
          </NavLink>

          <NavLink className="designLink" to="/portfolio/design/additional-creations" activeStyle={{borderBottom: "solid 1px greenyellow"}}>
            <img src={additionalCreations} alt="Additional Creations Link"/>
          </NavLink>

        </div>       
        
      );
    }
  }
  
  export default DesignLinks;