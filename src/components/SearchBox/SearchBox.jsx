import "./SearchBox.scss";

const SearchBox = ({ name, onChange }) => {
  return (
    <section className="search-box">
      <input
        className="search-box__input"
        type="text"
        placeholder={name}
        onChange={onChange}
      />
    </section>
  );
};

export default SearchBox;
