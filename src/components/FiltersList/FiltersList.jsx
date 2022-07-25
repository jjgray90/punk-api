import { useState, useEffect } from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ setParams }) => {
  const [paramsObj, setParamsObj] = useState();
  const [checked, setChecked] = useState();
  const [value, setValue] = useState();

  const getQueryParams = (obj) => new URLSearchParams(obj).toString();

  const addKey = () => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState, ...value };
      setParams(getQueryParams(newObj));
      return newObj;
    });
  };

  const removeKey = () => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState };
      delete newObj[Object.keys(value)[0]];
      setParams(getQueryParams(newObj));
      return newObj;
    });
  };

  useEffect(() => {
    if (checked) {
      addKey();
    }
    if (!checked && paramsObj) {
      removeKey();
    }
  }, [checked]);

  return (
    <section className="filters-list">
      <FilterItem
        type="checkbox"
        name="High ABV (>6.0%)"
        value={{ abv_gt: 6 }}
        setParams={setParams}
        paramsObj={paramsObj}
        setParamsObj={setParamsObj}
        setChecked={setChecked}
        setValue={setValue}
      />
      <FilterItem
        type="checkbox"
        name="Low ABV (<4.0%)"
        value={{ abv_lt: 4 }}
        setParams={setParams}
        paramsObj={paramsObj}
        setParamsObj={setParamsObj}
        setChecked={setChecked}
        setValue={setValue}
      />
    </section>
  );
};

export default FiltersList;
