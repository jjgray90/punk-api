import { useState } from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ params, setParams }) => {
  const [paramsObj, setParamsObj] = useState();






  
  return (
    <section className="filters-list">
      <FilterItem
        type="checkbox"
        name="High ABV (>6.0%)"
        value={{ abv_gt: 6 }}
        setParams={setParams}
        paramsObj={paramsObj}
        setParamsObj={setParamsObj}
      />
      <FilterItem
        type="checkbox"
        name="Low ABV (<4.0%)"
        value={{ abv_lt: 4 }}
        setParams={setParams}
        paramsObj={paramsObj}
        setParamsObj={setParamsObj}
      />
    </section>
  );
};

export default FiltersList;
