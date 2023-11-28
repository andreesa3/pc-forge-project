import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import PowerCarousel from '../components/carousels/PowerCarousel';

const PowerDetail = () => {
  const { id } = useParams();
  const power = mockfile.power.find((power) => power.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!power) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <>
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={power.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>POWER</span>
        <h2 className='nameComponent'>{power.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{power.description} </p>
      <p className='descriptionComponent'><span className="titleComponent">CERTIFICAZIONE:</span>{power.details.certification} </p>
      <p className='descriptionComponent'><span className="titleComponent">WATTAGGIO:</span>{power.details.wattage} </p>
      <p className='descriptionComponent'><span className="titleComponent">MODULARITA:</span>{power.details.modularity} </p>
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${power.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <h3 className='component-details-suggestion'>ALTRI PRODOTTI</h3>
    <PowerCarousel/>
    </>
  );
};

export default PowerDetail;
