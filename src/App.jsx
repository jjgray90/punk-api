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
      console.log(val);
      const newObj = { ...currentState };
      delete newObj[Object.keys(val)[0]];
      setParams(getQueryParams(newObj));
      return newObj;
    });
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
    if (value) {
      addKey(value);
    }
    if (!checked && paramsObj) {
      removeKey(value);
    }
  }, [checked, value]);

  return (
    <section className="app">
      <div className="app__nav">
        <Navbar
          params={params}
          setChecked={setChecked}
          setValue={setValue}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div className="app__main">{beers && <Main beers={beers} />}</div>
    </section>
  );
};

export default App;
