import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import GpuCarousel from '../components/carousels/GpuCarousel';

const GpuDetail = () => {
  const { id } = useParams();
  const gpu = mockfile.gpu.find((gpu) => gpu.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!gpu) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <>
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={gpu.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>GPU</span>
        <h2 className='nameComponent'>{gpu.name}</h2>
      <p className='descriptionComponent'>Descrizione:{gpu.description} </p>
      <p className='infoCompontent'>Socket: {gpu.socket}</p>
      <p className='priceComponent'>Prezzo: {`${gpu.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <GpuCarousel/>
    </>
  );
};

export default GpuDetail;
