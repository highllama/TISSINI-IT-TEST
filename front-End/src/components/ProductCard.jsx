import React from "react";
//COMPONENTS
import AddToCardButton from "./AddToCardButton";
//STYLES
import "../assets/styles/components/ProductCard.scss";

const ProductCard = (item) => {
  const { name, imageUrl, price,sizes} = item.item;
 
  return (
    <div className="ProductCard">
      <div className="ProductCard__image">
        <img src={imageUrl} alt={name} />
        <div className="ProductCard__select">
          <AddToCardButton sizes={sizes} item={item.item} />
          <h2 className='ProductCard__select-price'>${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
