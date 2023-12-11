import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import { useGetAllProductsQuery } from "../../features/ProductApi";
import { useCartActions } from "../../utilities/CartUtility"

const SsdCards = () => {
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

  const ssdItems = response.ssd;

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (ssdId) => {
    navigate(`/product/ssd/${ssdId}`);
  };

 

  const sortedSsdArray = [...ssdItems].sort((a, b) => {
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
          {sortedSsdArray.map((ssd) => (
            <div key={ssd.id}>
              <CarouselCard
                addToCart={() => handleAddToCart(ssd)}
                text={ssd.name}
                price={`${ssd.price}`}
                img={ssd.img}
                detail={() => handleCardClick(ssd.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SsdCards;