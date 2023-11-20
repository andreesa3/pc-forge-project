import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const GpuCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const gpuArray = mockfile.gpu;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (gpuId) => {
    navigate(`/product/gpu/${gpuId}`);
  };

  const sortedGpuArray = [...gpuArray].sort((a, b) => {
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
        {sortedGpuArray.map((gpu) => (
          <div key={gpu.id} onClick={() => handleCardClick(gpu.id)}>
            <CarouselCard text={gpu.name} price={`${gpu.price}€`} img={gpu.img} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default GpuCards;
