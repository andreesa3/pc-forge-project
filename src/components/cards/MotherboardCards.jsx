import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const MotherboardCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const mbArray = mockfile.motherboard;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (mbId) => {
    navigate(`/product/mb/${mbId}`);
  };

  const sortedMbArray = [...mbArray].sort((a, b) => {
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
        {sortedMbArray.map((mb) => (
          <div key={mb.id} onClick={() => handleCardClick(mb.id)}>
            <CarouselCard text={mb.name} price={`${mb.price}`} img={mb.img} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default MotherboardCards;
