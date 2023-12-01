import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';

const PreBuilderCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const preBuilderArray = mockfile.prebuilder;
  const navigate = useNavigate();
  const location = useLocation();

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (preBuilderId) => {
    navigate(`/prebuilder/${preBuilderId}`);
  };

  const sortedPrebuilderArray = [...preBuilderArray].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });


  const type = (() => {
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  })();

  const filteredPrebuilders = sortedPrebuilderArray.filter((preBuilder) => {
    if (type === 'creator') {
      return preBuilder.type === 'entrylevel';
    } else if (type === 'innovator') {
      return preBuilder.type === 'medium';
    } else if (type === 'forgemaster') {
      return preBuilder.type === 'high';
    } else {
      return true;
    }
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
          {filteredPrebuilders.map((preBuilder) => (
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
