import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSlice';

const RamCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { data: response, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const ramItems = response && response.ram ? response.ram : [];
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (ramId) => {
    navigate(`/product/ram/${ramId}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }

  const sortedRamArray = [...ramItems].sort((a, b) => {
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
          <div key={ram.id} >
            <CarouselCard addToCart={() => handleAddToCart(ram)} text={ram.name} price={`${ram.price}`} img={ram.img} detail={() => handleCardClick(ram.id)} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default RamCards;
