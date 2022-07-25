import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({ params, setParams }) => {
  return <FiltersList params={params} setParams={setParams} />;
};

export default Navbar;
