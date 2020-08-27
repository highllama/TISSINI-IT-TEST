import React from 'react';
import { Link } from 'react-router-dom';

const CarouselCard = ({imageUrl, redirectTo}) => {
   return (
      <div>
         <Link to={redirectTo}>
         <img height='213' src={imageUrl} alt={imageUrl}/>
         </Link>
      </div>
   );
}

export default CarouselCard;
