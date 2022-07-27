import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";
import SearchBox from "../SearchBox/SearchBox";

const FiltersList = ({ handleSearchInput, handleCheckInput }) => {
  return (
    <section className="filters-list">
      <FilterItem
        name="High ABV"
        onChange={(event) => handleCheckInput(event, { abv_gt: 6 })}
      />
      <FilterItem
        name="Classic Range"
        onChange={(event) =>
          handleCheckInput(event, { brewed_before: "10-2010" })
        }
      />
      <SearchBox name="Search By Name" onChange={handleSearchInput} />
    </section>
  );
};

export default FiltersList;
