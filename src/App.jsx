import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";

const App = () => {
  const [beers, setBeers] = useState({});

  const getBeers = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");

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
  }, []);

  console.log(beers);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
