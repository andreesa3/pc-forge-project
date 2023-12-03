import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const CoolerCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const coolerArray = mockfile.cooler;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (coolerId) => {
    navigate(`/product/cooler/${coolerId}`);
  };

  const sortedCoolerArray = [...coolerArray].sort((a, b) => {
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
            <div key={cooler.id} onClick={() => handleCardClick(cooler.id)}>
              <CarouselCard text={cooler.name} price={`${cooler.price}€`} img={cooler.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoolerCards;
