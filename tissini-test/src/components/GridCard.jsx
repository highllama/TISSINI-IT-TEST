import React from "react";
//STYLE
import '../assets/styles/components/GridCard.scss'



const GridCard = ({ image, category, product, price }) => {
  return (
    <div className="GridCard">
      <img src={image} alt={product} />
      <h3 className='GridCard__product'>{product}</h3>
      <h3 className='GridCard__category' >{category}</h3>
      <h3 className='GridCard__price'>{price}</h3>
    </div>
  );
};

export default GridCard;
