import "./FilterItem.scss";

const FilterItem = ({ name, onChange }) => {
  return (
    <section className="filter-item">
      <label className="filter-item__label" htmlFor={name}>
        {name}
      </label>
      <input type="checkbox" name={name} onChange={onChange} />
    </section>
  );
};

export default FilterItem;
