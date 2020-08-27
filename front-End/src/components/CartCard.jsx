import React from "react";
//REDUX
import { useDispatch } from "react-redux";
import { removeProductAction } from "../redux/cartDuck";
//STYLE
import "../assets/styles/components/CartCard.scss";

const CartCard = ({ article , index}) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, _id } = article.item;
  const { size, count } = article;

  const handleDelete = (id) => {
    dispatch(removeProductAction(id));
  };
  


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
          <button onClick={() => handleDelete(_id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
