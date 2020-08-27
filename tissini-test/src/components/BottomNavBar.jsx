import React from "react";
import {Link} from 'react-router-dom'

const BottomNavBar = () => {

  return (
    <>
      <div className="Layout__navBar__separator"></div>
      <div className="Layout__navBar">
        <div className="Layout__navBar__icons">
          <Link to="/categorias" >
            <i className="fas fa-home "></i>
            <h4>Categorias</h4>
          </Link>
          <Link to="/catalogo">
            <i className="fas fa-address-card "></i>
            <h4>Catalogo</h4>
          </Link>
          <Link to="/carrito">
            <i className="fas fa-cart-arrow-down "></i>
            <h4>Carrito</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
