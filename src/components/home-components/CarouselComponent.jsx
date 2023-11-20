import Carousel from 'react-bootstrap/Carousel';

import pc1 from '../../assets/images/pc1.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <Carousel data-bs-theme="dark">
          <Carousel.Item interval={4000}>
            <img src={pc1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={pc1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={pc1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={pc1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={pc1} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselComponent;