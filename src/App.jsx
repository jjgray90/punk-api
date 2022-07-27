import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState();
  const [params, setParams] = useState("");
  const [, setParamsObj] = useState();
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

  const updateQueryParams = (obj) =>
    setParams(new URLSearchParams(obj).toString());

  const removeKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState };
      delete newObj[Object.keys(val)[0]];
      updateQueryParams(newObj);
      return newObj;
    });
  };

  const handleCheckInput = (event, obj) => {
    if (!event.target.checked) {
      removeKey(obj);
    } else setValue(obj);
  };

  const handleSearchInput = (event) => {
    if (event.target.value.length < 1) {
      removeKey({ beer_name: event.target.value });
    } else {
      setValue({ beer_name: event.target.value });
    }
  };

  useEffect(() => {
    getBeers(params);
  }, [params]);

  useEffect(() => {
    const addKey = (val) => {
      setParamsObj((currentState) => {
        const newObj = { ...currentState, ...val };
        updateQueryParams(newObj);
        return newObj;
      });
    };

    addKey(value);
  }, [value]);

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
