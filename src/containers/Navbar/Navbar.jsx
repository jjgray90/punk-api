import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({ handleSearchInput, handleCheckInput }) => {
  return (
    <section className="navbar">
      <h1 className="heading">PUNK API</h1>
      <FiltersList
        handleSearchInput={handleSearchInput}
        handleCheckInput={handleCheckInput}
      />
    </section>
  );
};

export default Navbar;
