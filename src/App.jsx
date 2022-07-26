import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState();
  const [params, setParams] = useState("");
  const [paramsObj, setParamsObj] = useState();
  const [checked, setChecked] = useState();
  const [value, setValue] = useState();

  const getBeers = async (parameters) => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?${parameters}`
      );

      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const getQueryParams = (obj) =>
    setParams(new URLSearchParams(obj).toString());

  const addKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState, ...val };
      getQueryParams(newObj);
      return newObj;
    });
  };

  const removeKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState };
      delete newObj[Object.keys(val)[0]];
      getQueryParams(newObj);
      return newObj;
    });
  };

  const handleCheckInput = (event, obj) => {
    setChecked(event.target.checked);
    setValue(obj);
  };

  const handleSearchInput = (event) => {
    if (event.target.value.length < 1) {
      removeKey({ beer_name: event.target.value });
    } else {
      setChecked(true);
      setValue({ beer_name: event.target.value });
    }
  };

  useEffect(() => {
    getBeers(params);
  }, [params]);

  useEffect(() => {
    addKey(value);
    if (!checked && paramsObj) {
      removeKey(value);
    }
    // eslint-disable-next-line
  }, [checked, value]);

  return (
    <section className="app">
      <div className="app__nav">
        <Navbar
          handleSearchInput={handleSearchInput}
          handleCheckInput={handleCheckInput}
        />
      </div>
      <div className="app__main">{beers && <Main beers={beers} />}</div>
    </section>
  );
};

export default App;
