import React from 'react'
import Button from '../home-components/Button'


const CarouselCard = ({ img, text, price }) => {
  return (
    <div className='wrapCarouselCard'>
      <div className='carouselCard'><img className='imgCarouselCard' src={img} alt="" />
        <div className='infoCardCarousel'>
          <span className='titleCarouselCard'><p>{text}</p></span>
          <span className='priceCarouselCard'>{price}</span></div>
        <div className='btnCarouselCard'>
          <Button text='Compra ora' theme='dark' />
          <Button text='Aggiungi al carrello' theme='light' />
        </div>
      </div>

    </div>
  )
}

export default CarouselCard