import React from 'react';
import Select from './Select';



const Details = ({ type, details,data }) => {
  
  const renderDetails = () => {
    switch (type) {
      case 'cpu':
        return (
          <div className="selected-details">
            
            <p className="selected-details-p"> Nome:  {data.name}</p>
            <p className="selected-details-p"> Cores:  {details.cores}</p>
            {/* <p className="selected-details-p">Threads: {details.threads}</p>
            <p className="selected-details-p">Cache: {details.cache}</p> */}
            <p className="selected-details-p"> Power:  {details.power}</p>
            <p className="selected-details-p"> Prezzo:  {data.price}€</p>
           
          </div>
        );
      case 'gpu':
        return (
          <div className="selected-details">
             <p className="selected-details-p"><span className='builder-selected-titles'> Nome:</span>  {data.name}</p>
            {/* <p className="selected-details-p">Architecture: {details.architecture}</p> */}
            <p className="selected-details-p"> <span className='builder-selected-titles'>Memoria:</span> {details.memory}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Power: </span> {details.power}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Prezzo: </span> {data.price}€</p>
          </div>
        );
      case 'motherboard':
        return (
          <div className="selected-details">
             <p className="selected-details-p"><span className='builder-selected-titles'> Nome:</span>  {data.name}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'> Socket:</span>  {details.socket}</p>
            {/* <p className="selected-details-p">Chipset: {details.chipset}</p> */}
            <p className="selected-details-p"> <span className='builder-selected-titles'>Form Factor:</span>  {details.form_factor}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'> Prezzo:</span>  {data.price} €</p>
            
          </div>
        );
      case 'ram':
        return (
          <div className="selected-details">
             <p className="selected-details-p"><span className='builder-selected-titles'> Nome: </span> {data.name}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Memory Type:</span>  {details.memoryType}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Capacity:</span>  {details.capacity}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Prezzo:</span>  {data.price}€</p>
          </div>
        );
      case 'power':
        return (
          <div className="selected-details">
             <p className="selected-details-p"><span className='builder-selected-titles'> Nome: </span>  {data.name}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'>Certificazione: </span>  {details.certification}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'> Wattaggio:</span>   {details.wattage}</p>
            {/* <p className="selected-details-p">Modularity: {details.modularity}</p> */}
            <p className="selected-details-p"><span className='builder-selected-titles'> Prezzo: </span>  {data.price}€</p>
          </div>
        );
      case 'tower':
        return (
          <div className="selected-details">
             <p className="selected-details-p"><span className='builder-selected-titles'> Nome: </span> {data.name}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'> Tipo:</span>  {details.type}</p>
            {/* <p className="selected-details-p">Motherboard Support: {details.motherboardSupport}</p> */}
            <p className="selected-details-p"><span className='builder-selected-titles'>Colore:</span>  {details.color}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Prezzo: </span> {data.price}€</p>
            
          </div>
        );
      case 'ssd':
        return (
          <div className="selected-details">
             <p className="selected-details-p"> <span className='builder-selected-titles'>Nome:</span>  {data.name}</p>
            {/* <p className="selected-details-p">Type: {details.type}</p>
            <p className="selected-details-p">Interface: {details.interface}</p> */}
            <p className="selected-details-p"> <span className='builder-selected-titles'>Capacity:</span>  {details.capacity}</p>
            <p className="selected-details-p"> <span className='builder-selected-titles'>Dimensione: </span> {details.formFactor}</p> 
           {/*  <p className="selected-details-p">Speed: {details.speed}</p> */}
            <p className="selected-details-p"><span className='builder-selected-titles'> Prezzo:</span>  {data.price}€</p>
          </div>
        );
      case 'cooler':
        return (
          <div className="selected-details">
             <p className="selected-details-p"> <span className='builder-selected-titles'>Nome:</span>  {data.name}</p>
            {/* <p className="selected-details-p">Socket Compatibility: {details.socketCompatibility}</p> */}
            <p className="selected-details-p"> <span className='builder-selected-titles'>Tipo:</span>  {details.type}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'>Dimensione:</span> {details.fanSize}</p>
            <p className="selected-details-p"><span className='builder-selected-titles'>Prezzo:</span> {data.price}€</p>
          </div>
        );
      default:
        return null;
    }
  };

  return renderDetails();
};

const SelectionWrapper = ({ imgSrc, options, onSelectChange, selectedData, type,data }) => {
  return (
    <div className="selection-wrapper">
      <span><img src={imgSrc} alt={imgSrc} /></span>
      <Select className="builder-select" options={options} onSelectChange={onSelectChange} />
      {selectedData && <Details type={type}  data={data} details={selectedData.details} />}
    </div>
  );
};



export default SelectionWrapper;
