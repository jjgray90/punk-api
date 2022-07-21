import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <>
      <CardList beers={beers} />
      <p>hiya</p>
    </>
  );
};

export default Main;
