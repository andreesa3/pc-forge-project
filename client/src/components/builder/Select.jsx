const Select = ({ options, onSelectChange, label,name }) => {
  if (options === undefined) {
    return null; 
  }
  const defaultLabel = `Select ${name}`;
  return (
    <select className="builder-select" onChange={onSelectChange} aria-label={defaultLabel}>
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
