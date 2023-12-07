import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSlice';

const PowerCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { data: response, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const powerItems = response && response.power ? response.power : [];

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (powerId) => {
    navigate(`/product/power/${powerId}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }

  const sortedPowerArray = [...powerItems].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <section> 
    <div className='cardWrapper wrapper'>
      <label htmlFor="sortOrderLabel">Ordina per prezzo:</label>
      <select className="sortOrderSelect" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <div className='componentCards'>
        {sortedPowerArray.map((power) => (
          <div key={power.id} >
            <CarouselCard addToCart={() => handleAddToCart(power)} text={power.name} price={`${power.price}`} img={power.img} detail={() => handleCardClick(power.id)}/>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default PowerCards;
