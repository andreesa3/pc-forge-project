import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const RamCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const ramArray = mockfile.ram;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (ramId) => {
    navigate(`/product/ram/${ramId}`);
  };

  const sortedRamArray = [...ramArray].sort((a, b) => {
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
        {sortedRamArray.map((ram) => (
          <div key={ram.id} onClick={() => handleCardClick(ram.id)}>
            <CarouselCard text={ram.name} price={`${ram.price}€`} img={ram.img} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default RamCards;
