import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState();
  const [apiCall, setApiCall] = useState(false);

  const getBeers = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");

      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const data = await response.json();
      setBeers(data);
      setApiCall(true);
    } catch (error) {
      alert(error.message);
    }
  };
  
  useEffect(() => {
    getBeers();
  }, []);

  console.log(beers);

  return (
    <section className="app">
      <div className="app__nav">
        <Navbar />
      </div>
      <div className="app__main">{apiCall && <Main beers={beers} />}</div>
    </section>
  );
};

export default App;
