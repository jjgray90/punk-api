import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <section className="main">
      <CardList beers={beers} />
    </section>
  );
};

export default Main;
