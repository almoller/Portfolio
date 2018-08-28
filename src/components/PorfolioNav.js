import React from "react";
import { NavLink } from 'react-router-dom';


const PortfolioNav = () => (
<div>
  
  <h2 className='text-center pageTitle'>Portfolio</h2>
        
  <div className='pageSubTitleContainer'>
    <NavLink to="/portfolio/web" activeStyle={{background: 'rgba(175, 175, 175, 0.3)'}}>
      <h3 className='pageSubTitle'>Web Development</h3>
    </NavLink>
    <NavLink to="/portfolio/design" activeStyle={{background: 'rgba(175, 175, 175, 0.3)'}}>
      <h3 className='pageSubTitle'>Graphic Design</h3>
    </NavLink>
  </div>

</div> 
);

export default PortfolioNav;