import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';

const PrebuildDetail = () => {
  const { id } = useParams();
  const preBuilder = mockfile.prebuilder.find((preBuilder) => preBuilder.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!preBuilder) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={preBuilder.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>PREBUILDER</span>
        <h2 className='nameComponent'>{preBuilder.name}</h2>
      <p className='descriptionComponent'>Descrizione:{preBuilder.description} </p>
      <p className='infoCompontent'>Socket: {preBuilder.socket}</p>
      <p className='infoCompontent'>CPU: {preBuilder.cpu}</p>
      <p className='infoCompontent'>GPU: {preBuilder.gpu}</p>
      <p className='infoCompontent'>CASE: {preBuilder.case}</p>
      <p className='infoCompontent'>POWER: {preBuilder.power}</p>
      <p className='infoCompontent'>SSD: {preBuilder.ssd}</p>
      <p className='infoCompontent'>RAM: {preBuilder.ram}</p>
      <p className='infoCompontent'>MOTHERBOARD: {preBuilder.motherboard}</p>
      <p className='infoCompontent'>COOLER: {preBuilder.cooler}</p>
      <p className='priceComponent'>Prezzo: {`${preBuilder.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
  );
};

export default PrebuildDetail;
