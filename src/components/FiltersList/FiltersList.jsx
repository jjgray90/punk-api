import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";
import SearchBox from "../SearchBox/SearchBox";

const FiltersList = ({ setChecked, setValue, handleSearchInput }) => {
  return (
    <section className="filters-list">
      <FilterItem
        name="High ABV (>6.0%)"
        value={{ abv_gt: 6 }}
        setChecked={setChecked}
        setValue={setValue}
      />
      <FilterItem
        name="Low ABV (<4.0%)"
        value={{ abv_lt: 4 }}
        setChecked={setChecked}
        setValue={setValue}
      />
      <SearchBox name="Search By Name" onChange={handleSearchInput} />
    </section>
  );
};

export default FiltersList;
