import React from "react";
//STYLE
import "../assets/styles/components/Cart.scss";
//REDUX
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
const Cart = () => {
  const data = useSelector((store) => store.cartReducer.data);
  // console.log(data);
  return data.length < 1 ? (
    <div className="Cart">
      <div className="container">
        <img
          src="https://mitienda.moda/img/empty-cart.1bfda269.png"
          alt="empty shopping cart"
        />
      </div>
      
    </div>
  ) : (
    <div className="container">
      <div>
        <h3>Items añadidos</h3>
      </div>
      <div>
        {data.map((article,index) => (
          <CartCard article={article} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;
