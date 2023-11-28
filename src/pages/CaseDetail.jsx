import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import CaseCarousel from '../components/carousels/CaseCarousel';

const CaseDetail = () => {
  const { id } = useParams();
  const tower = mockfile.tower.find((tower) => tower.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!tower) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <>
    <div className='boxDetails'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={tower.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>CASE</span>
        <h2 className='nameComponent'>{tower.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{tower.description} </p>
      <p className='infoCompontent'><span className="titleComponent">TIPOLOGIA CASE:</span> {tower.details.type}</p>
      <p className='infoCompontent'><span className="titleComponent">FORM FACTOR:</span> {tower.details.motherboardSupport}</p>
      <p className='infoCompontent'><span className="titleComponent">DIMENSIONI:</span> {tower.details.dimensions}</p>
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${tower.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
      <h3 className='component-details-suggestion'>ALTRI PRODOTTI</h3>
    <CaseCarousel/>
    </>
  );
};

export default CaseDetail;
