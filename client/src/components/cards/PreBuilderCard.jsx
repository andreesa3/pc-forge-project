import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CarouselCard from './CarouselCard';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { useCartActions } from "../../utilities/CartUtility"


const PreBuilderCards = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const { data: response, error, isLoading } = useGetAllProductsQuery();
  // const preBuilderArray = response.prebuilder;
  const navigate = useNavigate();
  const location = useLocation();
  const { handleAddToCart } = useCartActions();
  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const prebuilderItems = response.prebuilder;

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (preBuilderId) => {
    navigate(`/prebuilder/${preBuilderId}`);
  };



  const sortedPrebuilderArray = [...prebuilderItems].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });


  const type = () => {
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  };
  

  const filteredPrebuilders = sortedPrebuilderArray.filter((preBuilder) => {
    if (type() === 'creator' && preBuilder.type === 'entrylevel') return true;
    if (type() === 'innovator' && preBuilder.type === 'medium') return true;
    if (type() === 'forgemaster' && preBuilder.type === 'high') return true;
    if (type() !== 'creator' && type() !== 'innovator' && type() !== 'forgemaster') return true;
  
    return false;
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
              <CarouselCard addToCart={() => handleAddToCart(preBuilder)} text={preBuilder.name} price={`${preBuilder.price}`} img={preBuilder.img} detail={() => handleCardClick(preBuilder.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreBuilderCards;
