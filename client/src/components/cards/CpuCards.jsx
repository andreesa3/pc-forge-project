import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const CpuCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const cpuArray = mockfile.cpu;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (cpuId) => {
    navigate(`/product/cpu/${cpuId}`);
  };

  const sortedCpuArray = [...cpuArray].sort((a, b) => {
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
          {sortedCpuArray.map((cpu) => (
            <div key={cpu.id} onClick={() => handleCardClick(cpu.id)}>
              <CarouselCard text={cpu.name} price={`${cpu.price}€`} img={cpu.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CpuCards;
