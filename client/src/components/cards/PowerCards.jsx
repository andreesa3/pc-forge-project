import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const PowerCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const powerArray = mockfile.power;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (powerId) => {
    navigate(`/product/power/${powerId}`);
  };

  const sortedPowerArray = [...powerArray].sort((a, b) => {
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
          <div key={power.id} onClick={() => handleCardClick(power.id)}>
            <CarouselCard text={power.name} price={`${power.price}€`} img={power.img} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default PowerCards;
