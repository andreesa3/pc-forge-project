import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import { useGetAllProductsQuery } from "../../features/ProductApi";
import { useCartActions } from "../../utilities/CartUtility"


const MotherboardCards = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();
  const { data: response, error, isLoading } = useGetAllProductsQuery();
  const { handleAddToCart } = useCartActions();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  const mbItems = response.motherboard;
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/mb/${productId}`);
  };

  
  const sortedMbArray = [...mbItems].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <section>
      <div className="cardWrapper wrapper">
        <label htmlFor="sortOrderLabel">Ordina per prezzo:</label>
        <select
          className="sortOrderSelect"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
        <div className="componentCards">
          {sortedMbArray.map((mb) => (
            <div key={mb.id}>
              <CarouselCard
                addToCart={() => handleAddToCart(mb)}
                text={mb.name}
                price={`${mb.price}`}
                img={mb.img}
                detail={() => handleCardClick(mb.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotherboardCards;
