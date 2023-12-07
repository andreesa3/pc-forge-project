import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSlice';

const CaseCards = () => {
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

  const towerItems = response && response.tower ? response.tower : [];
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (caseId) => {
    navigate(`/product/case/${caseId}`);
  };

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }

  const sortedCaseArray = [...towerItems].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <section>
      <div className='cardWrapper wrapper'>
        <label htmlFor="sortOrderLabel">Ordina per prezzo:</label>
        <select className="sortOrderSelect" value={sortOrder} onChange={handleSortOrderChange}>
          <option className='options' value="asc">Crescente</option>
          <option className='options' value="desc">Decrescente</option>
        </select>
        <div className='componentCards'>
          {sortedCaseArray.map((tower) => (
            <div key={tower.id} >
              <CarouselCard addToCart={() => handleAddToCart(tower)} text={tower.name} price={`${tower.price}`} img={tower.img} detail={() => handleCardClick(tower.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseCards;
