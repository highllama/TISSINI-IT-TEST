import React from "react";
//STYLE
import "../assets/styles/components/CartCard.scss";

const CartCard = ({ article }) => {
  const { imageUrl, name, price } = article.item;
  const { size, count } = article;
  return (
    <div className="CartCard">
      <div className="CartCard__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="CartCard__info">
        <h2>{name}</h2>
        <br />
        <h3>Talla: </h3>
        <b> {size}</b>
        <br />
        <h3>Cantidad: </h3>
        <b> {count}</b>
        <br />
        <h3>Unidad: </h3>
        <b> ${price}</b>
        <br />
        <h2 className="CartCard__total">${price * count}</h2>
        <div>
          <button>aas</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
