import React from 'react';
import Select from './Select';



const Details = ({ type, details,data }) => {
  
  const renderDetails = () => {
    switch (type) {
      case 'cpu':
        return (
          <div className="selected-details">
            
            <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Cores: {details.cores}</p>
            <p className="selected-details-p">Threads: {details.threads}</p>
            <p className="selected-details-p">Cache: {details.cache}</p>
            <p className="selected-details-p">Power: {details.power}</p>
           
          </div>
        );
      case 'gpu':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Architecture: {details.architecture}</p>
            <p className="selected-details-p">Memory: {details.memory}</p>
            <p className="selected-details-p">Power: {details.power}</p>
          </div>
        );
      case 'motherboard':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Socket: {details.socket}</p>
            <p className="selected-details-p">Chipset: {details.chipset}</p>
            <p className="selected-details-p">Form Factor: {details.form_factor}</p>
            
          </div>
        );
      case 'ram':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Memory Type: {details.memoryType}</p>
            <p className="selected-details-p">Capacity: {details.capacity}</p>
          </div>
        );
      case 'power':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Certification: {details.certification}</p>
            <p className="selected-details-p">Wattage: {details.wattage}</p>
            <p className="selected-details-p">Modularity: {details.modularity}</p>
          </div>
        );
      case 'tower':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Type: {details.type}</p>
            <p className="selected-details-p">Motherboard Support: {details.motherboardSupport}</p>
            <p className="selected-details-p">Color: {details.color}</p>
            
          </div>
        );
      case 'ssd':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Type: {details.type}</p>
            <p className="selected-details-p">Interface: {details.interface}</p>
            <p className="selected-details-p">Capacity: {details.capacity}</p>
            <p className="selected-details-p">Form Factor: {details.formFactor}</p>
            <p className="selected-details-p">Speed: {details.speed}</p>
          </div>
        );
      case 'cooler':
        return (
          <div className="selected-details">
             <p className="selected-details-p">Name: {data.name}</p>
            <p className="selected-details-p">Price: {data.price}</p>
            <p className="selected-details-p">Socket Compatibility: {details.socketCompatibility}</p>
            <p className="selected-details-p">Type: {details.type}</p>
            <p className="selected-details-p">Fan Size: {details.fanSize}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return renderDetails();
};

const SelectionWrapper = ({ imgSrc, options, onSelectChange, selectedData, type, name,data }) => {
  return (
    <div className="selection-wrapper">
      <span><img src={imgSrc} alt={imgSrc} /></span>
      <Select className="builder-select" options={options} onSelectChange={onSelectChange} label={`Select ${name}`} name={name} />
      {selectedData && <Details type={type}  data={data} details={selectedData.details} />}
    </div>
  );
};



export default SelectionWrapper;
