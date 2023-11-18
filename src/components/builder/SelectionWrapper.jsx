import React from 'react';
import Select from './Select';

const SelectionWrapper = ({ imgSrc, options, onSelectChange, selectedData,name }) => {
    
  return (
    <div className="selection-wrapper">
      <span><img src={imgSrc} alt={imgSrc}></img></span>
      <Select className="builder-select" options={options} onSelectChange={onSelectChange} label={`Select ${name}`} />
      {selectedData && (
        <div className="selected-details">
          <p>Name: {selectedData.name}</p>
          <p>Price: {selectedData.price}$</p>
          <p>Description: {selectedData.description}</p>
        </div>
      )}
    </div>
  );
};

export default SelectionWrapper;