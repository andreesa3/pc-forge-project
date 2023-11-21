import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pc1 from '../../assets/images/pc1.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselCard from '../cards/CarouselCard';

const CarouselComponent = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  return (
    <section>
      <div className="wrapper">
        {
           screenSize.width <= 678 ? (
            // Mobile
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
            </Carousel>
          ) : screenSize.width < 820 ? (
            // Tablet
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
            </Carousel>
          ) : (
            // Desktop
            <Carousel data-bs-theme="dark" style={{ margin: '0 auto' }}>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-images" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                  <CarouselCard img='src\assets\images\pngaaa.com-2319740.png' text='HP Victus 15L TG02-1002nl Gaming Desktop' price={1999.98} />
                </div>
              </Carousel.Item>
            </Carousel>
          )
        }
      </div>
    </section>
  );
}

export default CarouselComponent;