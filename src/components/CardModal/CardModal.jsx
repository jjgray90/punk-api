import "./CardModal.scss";
import whiteCross from "../../assets/images/white-cross.png";

const CardModal = ({ beer, toggleModal }) => {
  return (
    <section className="card-modal">
      <div className="card-modal__container">
        <div className="container__content">
          <img
            src={whiteCross}
            alt="Close menu"
            className="content__cross"
            onClick={toggleModal}
          />
          <h2 className="content__heading">{beer.name}</h2>
          <div className="content__sub">
            <p>{beer.abv}%</p>
            <span> ~ </span>
            <p className="sub__ital">{beer.tagline}</p>
          </div>
          {beer.image_url && (
            <img
              className="content__img"
              src={beer.image_url}
              alt={beer.name}
            />
          )}
          <p>{beer.description}</p>
          <h3 className="content__heading">Pairs Well With:</h3>
          <div className="content__food">
            <div className="food__scroll">
              {beer.food_pairing.map((item, index) => (
                <p key={beer.name + index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardModal;
