import React from 'react'

const InfoPcBuilder = ({imgPc, textPc, detail1, imageDetail1, imageDetail2, detail2, backgroundDetail }) => {
  return (
    <div className='wrapper containerInfo' >
        <div className='row-container-up' style={{backgroundColor: backgroundDetail}} >
          <div className='separator-1' style={{backgroundColor: backgroundDetail}}></div>
            <img className='image-container-up' src={imgPc} alt="" />
            <span style={{alignSelf:'center'}}>{textPc}</span>
            <div className='separator-2' style={{backgroundColor: backgroundDetail}}></div>
        </div>
        <div className='row-container-down'  >
            <div className='column-container1' style={{backgroundColor: backgroundDetail}}>
            <div className='separator-3' style={{backgroundColor: backgroundDetail}} ></div>
            <div className='box-image'><img className='image-container-down' src={imageDetail1} alt="" /></div>
            <span className='text-container'>{detail1}</span>
            <div className='separator-4' style={{backgroundColor: backgroundDetail}} ></div>
            </div>
            <div className='column-container2' style={{backgroundColor: backgroundDetail}} >
            <div className='separator-3' style={{backgroundColor: backgroundDetail}} ></div>
            <div className='box-image'><img className='image-container-down' src={imageDetail2} alt="" /></div>
            <span className='text-container'>{detail2}</span>
            <div className='separator-4' style={{backgroundColor: backgroundDetail}} ></div>
            </div>
        </div>
    </div>
  )
}

export default InfoPcBuilder