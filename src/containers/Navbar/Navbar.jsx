import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({ handleSearchInput, handleCheckInput }) => {
  return (
    <section className="navbar">
      <h1 className="heading">PUNK</h1>
      <FiltersList
        handleSearchInput={handleSearchInput}
        handleCheckInput={handleCheckInput}
      />
      <h1 className="heading heading--right">~API~</h1>
    </section>
  );
};

export default Navbar;
