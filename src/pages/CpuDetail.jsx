import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockfile from '/mockfile.json';


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
    <>
    <div className='boxDetails'>
    <button onClick={prevPage}>Torna indietro</button>
        <img src={cpu.img} alt="" />
      <div className='detailsComponent'>
        <h2>{cpu.name}</h2>
      <p>Prezzo: {`${cpu.price}€`}</p>
      <p>Descrizione:{cpu.description} </p>
      <p>Socket: {cpu.socket}</p>
      </div>
    </div>
    </>
  );
};

export default CpuDetail;
