import React from 'react';
import LineCard from './LineCard';


const ProductLines = () => {
   return (
      <>
      <LineCard 
        imageUrl='https://api.tissini.app/img/categories/textiles.png'
        redirect='catalogo/1'
        />
        <LineCard 
        imageUrl='https://api.tissini.app/img/categories/joyas.png'
        redirect='catalogo/2'
        />
        <LineCard 
        imageUrl='https://api.tissini.app/img/categories/concord.png'
        redirect='catalogo/1'
        />
        <LineCard 
        imageUrl='https://api.tissini.app/img/categories/naturales.png'
        redirect='catalogo/1'
        />
        </>
   );
}

export default ProductLines;
