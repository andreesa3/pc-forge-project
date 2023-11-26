import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import CoolerCarousel from '../components/carousels/CoolerCarousel';

const CoolerDetail = () => {
  const { id } = useParams();
  const cooler = mockfile.cooler.find((cooler) => cooler.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!cooler) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <>
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={cooler.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>COOLER</span>
        <h2 className='nameComponent'>{cooler.name}</h2>
      <p className='descriptionComponent'>Descrizione:{cooler.description} </p>
      <p className='infoCompontent'>Socket: {cooler.socket}</p>
      <p className='priceComponent'>Prezzo: {`${cooler.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <CoolerCarousel/>
    </>
  );
};

export default CoolerDetail;
