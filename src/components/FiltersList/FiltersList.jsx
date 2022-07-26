import { useState, useEffect } from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";
import SearchBox from "../SearchBox/SearchBox";

const FiltersList = ({ setParams }) => {
  const [paramsObj, setParamsObj] = useState();
  const [checked, setChecked] = useState();
  const [value, setValue] = useState();

  const getQueryParams = (obj) => new URLSearchParams(obj).toString();

  const addKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState, ...val };
      setParams(getQueryParams(newObj));
      return newObj;
    });
  };

  const removeKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState };
      delete newObj[Object.keys(val)[0]];
      setParams(getQueryParams(newObj));
      return newObj;
    });
  };

  const handleSearchInput = (event) => {
    if (event.target.value.length < 1) {
      setChecked(false);
    } else {
      setChecked(true);
      setValue({ beer_name: event.target.value });
    }
  };

  useEffect(() => {
    if (value) {
      addKey(value);
    }
    if (!checked && paramsObj) {
      removeKey(value);
    }
  }, [checked, value]);

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
