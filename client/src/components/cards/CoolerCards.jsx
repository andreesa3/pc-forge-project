import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSlice';

const CoolerCards = () => {
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

  const coolerItems = response && response.cooler ? response.cooler : [];

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (coolerId) => {
    navigate(`/product/cooler/${coolerId}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }

  const sortedCoolerArray = [...coolerItems].sort((a, b) => {
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
          {sortedCoolerArray.map((cooler) => (
            <div key={cooler.id} >
              <CarouselCard addToCart={() => handleAddToCart(cooler)} text={cooler.name} price={`${cooler.price}€`} img={cooler.img} detail={() => handleCardClick(cooler.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoolerCards;
