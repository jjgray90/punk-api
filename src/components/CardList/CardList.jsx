import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beers }) => {
  const beerCardsJSX = beers.map((beer) => <Card beer={beer} />);

  return <section className="card-list">{beerCardsJSX}</section>;
};

export default CardList;
