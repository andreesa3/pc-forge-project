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
    <section>
    <div className='boxDetails wrapper'>
        <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={cooler.img} alt="" />
      <div className='detailsComponent'>
      <span className='typeComponent'>COOLER</span>
        <h2 className='nameComponent'>{cooler.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{cooler.description} </p>
      <p className='descriptionComponent'><span className="titleComponent">TIPO:</span>{cooler.details.type} </p>
      <p className='descriptionComponent'><span className="titleComponent">DIMENSIONE VENTOLA:</span>{cooler.details.fanSize} </p>
      <p className='descriptionComponent'><span className="titleComponent">SUPPORTO SOCKET:</span>{cooler.details.socketCompatibility} </p>
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${cooler.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <div style={{marginTop: "150px"}}>
    <h3 className='component-details-suggestion'>Altri Prodotti</h3>
    <CoolerCarousel/>
    </div>
    </section>
  );
};

export default CoolerDetail;
