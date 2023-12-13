const Select = ({ options, onSelectChange, label, name, defaultValue }) => {
  if (options === undefined) {
    return null; 
  }

  const defaultLabel = `Select ${name}`;

  return (
    <select
      className="builder-select"
      onChange={onSelectChange}
      aria-label={defaultLabel}
      value={defaultValue}
    >
      <option value="DEFAULT" disabled>
        Seleziona il componente
      </option>
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
