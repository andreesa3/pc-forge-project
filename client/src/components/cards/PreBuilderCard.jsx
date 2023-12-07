import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { useLocation } from 'react-router-dom';
import mockfile from '/mockfile.json';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSlice';


const PreBuilderCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const preBuilderArray = mockfile.prebuilder;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const { data: response, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const prebuilderItems = response && response.prebuilder ? response.prebuilder : [];
  
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (preBuilderId) => {
    navigate(`/prebuilder/${preBuilderId}`);
  };

  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }


  const sortedPrebuilderArray = [...prebuilderItems].sort((a, b) => {
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
            <div key={preBuilder.id} >
              <CarouselCard addToCart={() => handleAddToCart(preBuilder)} text={preBuilder.name} price={`${preBuilder.price}€`} img={preBuilder.img} detail={() => handleCardClick(preBuilder.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreBuilderCards;
