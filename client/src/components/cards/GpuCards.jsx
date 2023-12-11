import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import { useGetAllProductsQuery } from "../../features/ProductApi";
import { useCartActions } from "../../utilities/CartUtility"

const GpuCards = () => {
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

  const gpuItems = response.gpu;

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/gpu/${productId}`);
  };


  const sortedGpuArray = [...gpuItems].sort((a, b) => {
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
          {sortedGpuArray.map((gpu) => (
            <div key={gpu.id}>
              <CarouselCard
                addToCart={() => handleAddToCart(gpu)}
                text={gpu.name}
                price={`${gpu.price}`}
                img={gpu.img}
                detail={() => handleCardClick(gpu.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GpuCards;
