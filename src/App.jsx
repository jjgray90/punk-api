import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState();
  const [params, setParams] = useState("");
  const [, setParamsObj] = useState();
  const [value, setValue] = useState();
  const [pageNum, setPageNum] = useState(1);

  // fetch beers with given parameters

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
      return data;
    } catch (error) {
      alert(error.message);
    }
  };

  // handle the checkbox inputs

  const handleCheckInput = (event, obj) => {
    if (!event.target.checked) {
      removeKey(obj);
    } else setValue(obj);
  };

  //handle the search bar inputs

  const handleSearchInput = (event) => {
    if (event.target.value.length < 1) {
      removeKey({ beer_name: event.target.value });
    } else {
      setValue({ beer_name: event.target.value });
    }
  };

  // fetch all beers and filter by PH

  const handlePHFilter = async (event) => {
    let num = 1;
    let tempArray = [];
    let data = await getBeers(params);
    if (event.target.checked) {
      while (data.length > 0) {
        data = await getBeers(`per_page=80&page=${num}&${params}`);
        data.filter((beer) => (beer.ph <= 4 ? tempArray.push(beer) : null));
        num += 1;
      }
      setBeers(tempArray);
    } else getBeers(params);
  };

  // handle pagination

  const handlePagination = (symbol) => {
    if (symbol === "+") {
      setPageNum(pageNum + 1);
    } else if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // convert object to query params

  const updateQueryParams = (obj) =>
    setParams(new URLSearchParams(obj).toString());


  // remove a key:value pair from the param object

  const removeKey = (val) => {
    setParamsObj((currentState) => {
      const newObj = { ...currentState };
      delete newObj[Object.keys(val)[0]];
      updateQueryParams(newObj);
      return newObj;
    });
  };

   // add key:value pair to paramObj whenever value state updates

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

  // fetch beers after every state change on params

  useEffect(() => {
    getBeers(params);
  }, [params]);

  // update values once pageNum state is updated

  useEffect(() => {
    setValue({ page: pageNum });
  }, [pageNum]);

  return (
    <section className="app">
      <div className="app__nav">
        <Navbar
          handleSearchInput={handleSearchInput}
          handleCheckInput={handleCheckInput}
          handlePagination={handlePagination}
          handlePHFilter={handlePHFilter}
        />
      </div>
      <div className="app__main">{beers && <Main beers={beers} />}</div>
    </section>
  );
};

export default App;
