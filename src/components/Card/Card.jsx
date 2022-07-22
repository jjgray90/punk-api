import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ beer }) => {
  return (
    <section className="card">
      <img src={beer.image_url} alt={beer.name} className="card__image" />
      <div className="card__hidden">
        <h2 className="hidden__heading">{beer.name}</h2>
        <p>{beer.abv}% ABV</p>
        <p>{beer.tagline}</p>
        <Button buttonText="Discover More" />
      </div>
    </section>
  );
};

export default Card;
