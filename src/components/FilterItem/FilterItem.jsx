import { useState, useEffect } from "react";

const FilterItem = ({
  type,
  name,
  value,
  setParams,
  paramsObj,
  setParamsObj,
}) => {
  const [checked, setChecked] = useState();

  const addKey = () => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState, ...value };
      setParams(new URLSearchParams(newObj).toString());
      return newObj;
    });
  };

  const removeKey = () => {
    setParamsObj((currentState) => {
      const { value, ...rest } = currentState;
      setParams(new URLSearchParams(rest).toString());
      return rest;
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
    <section className="filter-item">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </section>
  );
};

export default FilterItem;
