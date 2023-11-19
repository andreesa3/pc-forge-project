import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const CaseCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const caseArray = mockfile.tower;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (caseId) => {
    navigate(`/product/case/${caseId}`);
  };

  const sortedCaseArray = [...caseArray].sort((a, b) => {
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
        {sortedCaseArray.map((tower) => (
          <div key={tower.id} onClick={() => handleCardClick(tower.id)}>
            <CarouselCard text={tower.name} price={`${tower.price}€`} img={tower.img} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CaseCards;
