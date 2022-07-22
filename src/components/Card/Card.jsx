import "./Card.scss";

const Card = ({ beer }) => {
  return (
    <section className="card">
      <img src={beer.image_url} alt={beer.name} className="card__image" />
      <h2 className="card__heading">{beer.name}</h2>
    </section>
  );
};

export default Card;
