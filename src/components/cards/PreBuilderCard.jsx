import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const PreBuilderCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const preBuilderArray = mockfile.prebuilder;
  const navigate = useNavigate();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (preBuilderId) => {
    navigate(`/prebuilder/${preBuilderId}`);
  };

  const sortedPrebuilderArray = [...preBuilderArray].sort((a, b) => {
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
        {sortedPrebuilderArray.map((preBuilder) => (
          <div key={preBuilder.id} onClick={() => handleCardClick(preBuilder.id)}>
            <CarouselCard text={preBuilder.name} price={`${preBuilder.price}€`} img={preBuilder.img} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default PreBuilderCards;
