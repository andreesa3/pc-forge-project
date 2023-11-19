import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';

const SsdDetail = () => {
  const { id } = useParams();
  const ssd = mockfile.ssd.find((ssd) => ssd.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!ssd) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={ssd.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>SSD</span>
        <h2 className='nameComponent'>{ssd.name}</h2>
      <p className='descriptionComponent'>Descrizione:{ssd.description} </p>
      <p className='infoCompontent'>Socket: {ssd.socket}</p>
      <p className='priceComponent'>Prezzo: {`${ssd.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
  );
};

export default SsdDetail;
