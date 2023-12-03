import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import MotherBoardCarousel from '../components/carousels/MotherBoardCarousel';

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
    <section>
    <div className='boxDetails wrapper'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={mb.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>Motherboard</span>
        <h2 className='nameComponent'>{mb.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{mb.description} </p>
      <p className='descriptionComponent'><span className="titleComponent">SOCKET:</span>{mb.details.socket} </p>
      <p className='descriptionComponent'><span className="titleComponent">CHIPSET:</span>{mb.details.chipset} </p>
      <p className='descriptionComponent'><span className="titleComponent">FORM FACTOR:</span>{mb.details.form_factor} </p>
      <p className='descriptionComponent'><span className="titleComponent">SLOT DI MEMORIA:</span>{mb.details.memory_slots} </p>
      <p className='descriptionComponent'><span className="titleComponent">MEMORIA SUPPORTATA:</span>{mb.details.supported_memory} </p>
      
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${mb.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <div style={{marginTop: "150px"}}>
    <h3 className='component-details-suggestion'>Altri Prodotti</h3>
    <MotherBoardCarousel/>
    </div>
    </section>
  );
};

export default MotherBoardDetail;
