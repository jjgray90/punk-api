import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <section className="main">
      <h1>BEER</h1>
      <CardList beers={beers} />
    </section>
  );
};

export default Main;
