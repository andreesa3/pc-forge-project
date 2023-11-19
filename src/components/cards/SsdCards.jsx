import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const SsdCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const ssdArray = mockfile.ssd;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (ssdId) => {
    navigate(`/product/gpu/${ssdId}`);
  };

  const sortedSsdArray = [...ssdArray].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <> 
    <div className='cardWrapper'>
      <label htmlFor="sortOrderLabel">Ordina per prezzo:</label>
      <select className="sortOrderSelect" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <div className='componentCards'>
        {sortedSsdArray.map((ssd) => (
          <div key={ssd.id} onClick={() => handleCardClick(ssd.id)}>
            <CarouselCard text={ssd.name} price={`${ssd.price}€`} img={ssd.img} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default SsdCards;
