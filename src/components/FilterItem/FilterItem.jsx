const FilterItem = ({ name, setChecked, setValue, value }) => {
 
 
  const clickEvent = (e) => {
    setChecked(e.target.checked);
    setValue(value);
  };

  return (
    <section className="filter-item">
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" name={name} onChange={clickEvent} />
    </section>
  );
};

export default FilterItem;
