import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({ handleSearchInput, handleCheckInput }) => {
  return (
    <FiltersList
      handleSearchInput={handleSearchInput}
      handleCheckInput={handleCheckInput}
    />
  );
};

export default Navbar;
