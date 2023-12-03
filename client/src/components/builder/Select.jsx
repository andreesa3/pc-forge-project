const Select = ({ options, onSelectChange, label }) => {
  if (options === undefined) {
    return null; 
  }

  return (
    <select className="builder-select" onChange={onSelectChange} aria-label={label}>
      <option value="none" disabled hidden>
        {label}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
