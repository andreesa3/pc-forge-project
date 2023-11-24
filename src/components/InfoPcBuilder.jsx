import React from 'react'
import CarouselCard from './cards/CarouselCard'

const InfoPcBuilder = ({}) => {
  return (
    <div className='wrapper containerInfo' >
        <div className='row-container-up'>
            <img className='image-container' src="https://cdn11.bigcommerce.com/s-ntb5wmh3f/images/stencil/1280x1280/products/149/1032/2020_0813_P_Phantom_Tilt_Glass_1_2000x2000-compressed__84609.1674493379.png?c=1" alt="" />
            <h2 style={{alignSelf:'center'}}>Massime prestazioni!</h2>
        </div>
        <div className='row-container-down'>
            <div className='column-container'>
            <h2 className='text-container'>Massime prestazioni!</h2>
            <img className='image-container' src="https://cdn11.bigcommerce.com/s-ntb5wmh3f/images/stencil/1280x1280/products/149/1032/2020_0813_P_Phantom_Tilt_Glass_1_2000x2000-compressed__84609.1674493379.png?c=1" alt="" />
            </div>
            <div className='column-container'>
            <img className='image-container' src="https://cdn11.bigcommerce.com/s-ntb5wmh3f/images/stencil/1280x1280/products/149/1032/2020_0813_P_Phantom_Tilt_Glass_1_2000x2000-compressed__84609.1674493379.png?c=1" alt="" />
            <h2 className='text-container'>Massime prestazioni!</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoPcBuilder