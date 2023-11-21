import React from 'react'
import Button from '../home-components/Button'


const CarouselCard = ({ img, text, price }) => {
  return (
    <div className='wrapCarouselCard'>
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