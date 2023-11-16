import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';

const GpuDetail = () => {
  const { id } = useParams();
  const gpu = mockfile.gpu.find((gpu) => gpu.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!gpu) {
    return <div  >Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className='boxDetails'>
        <button onClick={prevPage}>Torna indietro</button>
        <img src={gpu.img} alt="" />
      <div className='detailsComponent'>
        <h2>{gpu.name}</h2>
      <p>Prezzo: {`${gpu.price}€`}</p>
      <p>Descrizione:{gpu.description} </p>
      <p>Socket: {gpu.socket}</p>
      </div>
    </div>
  );
};

export default GpuDetail;
