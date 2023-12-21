import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetAllProductsQuery } from "../../features/ProductApi"
import { useCartActions } from "../../utilities/CartUtility"
import CarouselCard from '../cards/CarouselCard';

const CarouselComponent = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [key, setKey] = useState(0);
  const { data: response, error, isLoading } = useGetAllProductsQuery();

  const navigate = useNavigate();
  const { handleAddToCart } = useCartActions();
  const handleCardClick = (preBuilderId) => {
    navigate(`/prebuilder/${preBuilderId}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setKey((prevKey) => prevKey + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const preBuilderArray = response && response.prebuilder ? response.prebuilder : [];


  const cardArray = (array, cardSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += cardSize) {
      result.push(array.slice(i, i + cardSize));
    }
    return result;
  };

  let rowCard;
  if (screenSize.width <= 678) {
    rowCard = 1;
  } else if (screenSize.width < 1010) {
    rowCard = 2;
  } else {
    rowCard = 3;
  }

  const groupedPrebuilderArray = cardArray(preBuilderArray, rowCard);

  return (
    <section>
      <div className="wrapper">
      <h2 className='component-title'>Scopri la nostra gamma di PC</h2>
        {
          screenSize.width <= 678 ? (
            // Mobile
            <Carousel key={key} data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPrebuilderArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((preBuilder) => (
                      <CarouselCard
                        key={preBuilder.id}
                        text={preBuilder.name}
                        price={`${preBuilder.price}€`}
                        img={preBuilder.img}
                        productId={preBuilder.id}
                        addToCart={() => handleAddToCart(preBuilder)}
                        detail={() => handleCardClick(preBuilder.id)}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : screenSize.width < 1010 ? (
            // Tablet
            <Carousel key={key} data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPrebuilderArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((preBuilder) => (
                      <CarouselCard
                        key={preBuilder.id}
                        text={preBuilder.name}
                        price={`${preBuilder.price}€`}
                        img={preBuilder.img}
                        productId={preBuilder.id}
                        addToCart={() => handleAddToCart(preBuilder)}
                        detail={() => handleCardClick(preBuilder.id)}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            // Desktop
            <Carousel key={key} data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPrebuilderArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((preBuilder) => (
                      <CarouselCard
                        key={preBuilder.id}
                        text={preBuilder.name}
                        price={`${preBuilder.price}€`}
                        img={preBuilder.img}
                        productId={preBuilder.id}
                        addToCart={() => handleAddToCart(preBuilder)}
                        detail={() => handleCardClick(preBuilder.id)}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )
        }
      </div>
    </section>
  );
}

export default CarouselComponent;