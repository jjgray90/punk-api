import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";
import Button from "../../components/Button/Button";

const Navbar = ({ handleSearchInput, handleCheckInput, handlePagination }) => {
  return (
    <section className="navbar">
      <h1 className="heading">PUNK</h1>
      <Button buttonText="<" onClick={() => handlePagination("-")} />
      <FiltersList
        handleSearchInput={handleSearchInput}
        handleCheckInput={handleCheckInput}
      />
      <Button buttonText=">" onClick={() => handlePagination("+")} />

      <h1 className="heading heading--right">~API~</h1>
    </section>
  );
};

export default Navbar;
