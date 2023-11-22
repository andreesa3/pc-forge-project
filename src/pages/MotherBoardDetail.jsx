import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';

const MotherBoardDetail = () => {
  const { id } = useParams();
  const mb = mockfile.motherboard.find((mb) => mb.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!mb) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={mb.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>Motherboard</span>
        <h2 className='nameComponent'>{mb.name}</h2>
      <p className='descriptionComponent'>Descrizione:{mb.description} </p>
      <p className='infoCompontent'>Socket: {mb.socket}</p>
      <p className='priceComponent'>Prezzo: {`${mb.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
  );
};

export default MotherBoardDetail;
