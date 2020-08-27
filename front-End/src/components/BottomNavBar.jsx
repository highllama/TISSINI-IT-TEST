import React from "react";
//REACT ROUTER
import { Link } from "react-router-dom";
//REDUX
import { useSelector } from "react-redux";

const BottomNavBar = () => {
  const data = useSelector((store) => store.cartReducer.data);
  console.log(data);

  return (
    <>
      <div className="Layout__navBar__separator"></div>
      <div className="Layout__navBar">
        <div className="Layout__navBar__icons">
          <Link to="/categorias">
            <i className="fas fa-home "></i>
            <h4>Categorias</h4>
          </Link>
          <Link to="/catalogo">
            <i className="fas fa-address-card "></i>
            <h4>Catalogo</h4>
          </Link>
          <Link to="/carrito" className="Layout__navBar__icons-cart">
            <i className="fas fa-cart-arrow-down "></i>
            {data.length > 0 ? (
              <div className="Layout__navBar__icons-cartCount">
                {data.length > 0 ? data.length : ""}
              </div>
            ) : null}
            <h4>Carrito</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
