import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState();
  const [params, setParams] = useState("");

  const getBeers = async () => {
    try {
      const response = await fetch(
        "https://api.punkapi.com/v2/beers?" + params
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

  useEffect(() => {
    getBeers();
  }, [params]);

  return (
    <section className="app">
      <div className="app__nav">
        <Navbar params={params} setParams={setParams} />
      </div>
      <div className="app__main">{beers && <Main beers={beers} />}</div>
    </section>
  );
};

export default App;
