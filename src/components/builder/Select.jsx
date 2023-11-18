

const Select = ({ options, onSelectChange,label }) => {

    return (

      <select onChange={onSelectChange} aria-label={label} selected={label}>
         <option value="none" selected disabled hidden>
          {label}
      </option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))
        }
      </select>
    );
  };

  export default Select