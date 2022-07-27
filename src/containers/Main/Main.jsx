import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <>
      <section className="main">
        <CardList beers={beers} />
      </section>
      <div className="main-img"></div>
    </>
  );
};

export default Main;
