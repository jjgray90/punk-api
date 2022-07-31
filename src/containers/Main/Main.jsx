import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <>
      <section className="main">
        {beers.length > 0 ? (
          <CardList beers={beers} />
        ) : (
          <p>No beers for you my friend ☹️</p>
        )}
      </section>
      <div className="main-img"></div>
    </>
  );
};

export default Main;
