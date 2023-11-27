import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import RamCarousel from '../components/carousels/RamCarousel';


const RamDetail = () => {
  const { id } = useParams();
  const ram = mockfile.ram.find((ram) => ram.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!ram) {
    return <div>Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <>
    <div className='boxDetails'>
    <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={ram.img} alt="" />
      <div className='detailsComponent'>
        <span className='typeComponent'>Ram</span>
        <h2 className='nameComponent'>{ram.name}</h2>
      <p className='descriptionComponent'>Descrizione:{ram.description} </p>
      <p className='infoCompontent'>Socket: {ram.socket}</p>
      <p className='priceComponent'>Prezzo: {`${ram.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <RamCarousel/>
    </>
  );
};

export default RamDetail;
