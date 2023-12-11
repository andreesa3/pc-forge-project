import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { useCartActions } from "../../utilities/CartUtility"

const RamCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();
  const { data: response, error, isLoading } = useGetAllProductsQuery();
  const { handleAddToCart } = useCartActions();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const ramItems = response.ram;
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (ramId) => {
    navigate(`/product/ram/${ramId}`);
  };

  

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
