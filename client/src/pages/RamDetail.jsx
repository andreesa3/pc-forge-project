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
    <section>
    <div className='boxDetails wrapper'>
    <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={ram.img} alt="" />
      <div className='detailsComponent'>
        <span className='typeComponent'>Ram</span>
        <h2 className='nameComponent'>{ram.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{ram.description} </p>
      <p className='infoCompontent'><span className="titleComponent">TECNOLOGIA MEMORIA:</span> {ram.details.memoryType}</p>
      <p className='infoCompontent'>S<span className="titleComponent">DIMENSIONI:</span> {ram.details.capacity}</p>
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${ram.price}€`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <div style={{marginTop: "150px"}}>
    <h3 className='component-details-suggestion'>Altri Prodotti</h3>
    <RamCarousel/>
    </div>
    </section>
  );
};

export default RamDetail;
