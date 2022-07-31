import { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import CardModal from "../CardModal/CardModal";

const Card = ({ beer }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      <section className="card">
        {beer.image_url ? (
          <img src={beer.image_url} alt={beer.name} className="card__image" />
        ) : (
          <h2 className="card__heading">{beer.name}</h2>
        )}
        <div className="card__hidden">
          <h2 className="hidden__heading">{beer.name}</h2>
          <p>{beer.abv}% ABV</p>
          <p>{beer.tagline}</p>
          <Button buttonText="Discover More" onClick={toggleModal} />
        </div>
      </section>
      {modal && <CardModal beer={beer} toggleModal={toggleModal} />}
    </>
  );
};

export default Card;
