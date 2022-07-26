import "./SearchBox.scss";

const SearchBox = ({ name, onChange }) => {
  return (
    <section className="search-box">
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} onChange={onChange} />
    </section>
  );
};

export default SearchBox;
