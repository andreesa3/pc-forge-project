import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';
import Button from '../components/home-components/Button';
import CpuCarousel from '../components/carousels/CpuCarousel';


const CpuDetail = () => {
  const { id } = useParams();
  const cpu = mockfile.cpu.find((cpu) => cpu.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!cpu) {
    return <div>Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <section>
    <div className='boxDetails wrapper'>
    <button className='prevPageProducts' onClick={prevPage}><img className='imgButtonPrev' src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" alt="" /></button>
        <img className='imageComponent' src={cpu.img} alt="" />
      <div className='detailsComponent'>
        <span className='typeComponent'>CPU</span>
        <h2 className='nameComponent'>{cpu.name}</h2>
      <p className='descriptionComponent'><span className="titleComponent">DESCRIZIONE:</span>{cpu.description} </p>
      <p className='infoCompontent'><span className="titleComponent">SOCKET:</span> {cpu.socket}</p>
      <p className='priceComponent'><span className="titleComponent">CORES:</span> {cpu.details.cores}</p>
      <p className='priceComponent'><span className="titleComponent">THREADS:</span> {cpu.details.threads}</p>
      <p className='priceComponent'><span className="titleComponent">CACHE:</span> {cpu.details.cache}</p>
      <p className='priceComponent'><span className="titleComponent">TDB:</span> {cpu.details.power}</p>
      <p className='priceComponent'><span className="titleComponent">PREZZO:</span> {`${cpu.price} €`}</p>
      <div className='detailsButton'>
        <Button text='Compra ora' theme='dark'/>
        <Button text='Aggiungi al carrello' theme='light'/>
      </div>
      </div>
    </div>
    <h3 className='component-details-suggestion'>ALTRI PRODOTTI</h3>
    <CpuCarousel/>
    </section>
  );
};

export default CpuDetail;
