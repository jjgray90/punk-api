import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({ setChecked, setValue, handleSearchInput }) => {
  return (
    <FiltersList
      setChecked={setChecked}
      setValue={setValue}
      handleSearchInput={handleSearchInput}
    />
  );
};

export default Navbar;
