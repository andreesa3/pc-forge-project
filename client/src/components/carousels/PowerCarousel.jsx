// CarouselComponent.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockfile from '/mockfile.json';
import CarouselCard from '../cards/CarouselCard';

const PowerCarousel = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();

  const handleCardClick = (power) => {
    navigate(`/product/power/${power}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const PowerArray = mockfile.power;

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

  const groupedPowerArray = cardArray(PowerArray, rowCard);

  return (
    <section className='carosuel-section'>
      <div className="wrapper">
        {
          screenSize.width <= 678 ? (
            // Mobile
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPowerArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((power) => (
                      <CarouselCard
                        key={power.id}
                        text={power.name}
                        price={`${power.price}€`}
                        img={power.img}
                        productId={power.id}
                        onClick={handleCardClick}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : screenSize.width < 1010 ? (
            // Tablet
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPowerArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((power) => (
                      <CarouselCard
                        key={power.id}
                        text={power.name}
                        price={`${power.price}€`}
                        img={power.img}
                        productId={power.id}
                        onClick={handleCardClick}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            // Desktop
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              {groupedPowerArray.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {group.map((power) => (
                      <CarouselCard
                        key={power.id}
                        text={power.name}
                        price={`${power.price}€`}
                        img={power.img}
                        productId={power.id}
                        onClick={handleCardClick}
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

export default PowerCarousel;
