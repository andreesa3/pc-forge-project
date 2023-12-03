import React from 'react'
import Button from '../home-components/Button'

const CarouselCard = ({ text, price, img, productId, onClick }) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(productId.toString());
    }
  };

  return (
    <div className='wrapCarouselCard' onClick={handleCardClick}>
      <div className='carouselCard'><div className='wrapImg'><img className='imgCarouselCard' src={img} alt="" /></div>
        <div className='infoCardCarousel'>
          <span className='titleCarouselCard'><p>{text}</p></span>
          <span className='priceCarouselCard'>€{price}</span>
        </div>
        <div className='btnCarouselCard'>
          <Button text='Aggiungi al Carrello' theme='dark' />
        </div>
      </div>

    </div>
  )
}

export default CarouselCard