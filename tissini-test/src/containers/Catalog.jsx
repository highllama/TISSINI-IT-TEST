import React from 'react';
//COMPONENTS
import ProductCard from '../components/ProductCard';
//REDUX 
import { useSelector } from 'react-redux';
import Loading from './Loading';
const Catalog = () => {
   const data = useSelector(store => store.dataReducer.data.items)
   console.log(data);
   return data ? (
      <div className='Catalog container'>
         <div className='Catalog__main'>
            {data.map(item => (
               <ProductCard item={item}/>
            ))}
         </div>
      </div>
   ) : <Loading />;
}

export default Catalog;
