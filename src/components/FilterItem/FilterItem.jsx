const FilterItem = ({ type, name, setChecked, setValue, value }) => {
  const clickEvent = (e) => {
    setChecked(e.target.checked);
    setValue(value);
  };

  return (
    <section className="filter-item">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} onChange={clickEvent} />
    </section>
  );
};

export default FilterItem;
