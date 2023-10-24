import { Link } from "react-router-dom";
import PerfumeHero from "../../images/perfumenew.png";
import ChainsHero from "../../images/chains.png";
import ClothesHero from "../../images/clothes.png";

const productChoices = {
  0: {
    header: "THE FRESHEST SCENTS",
    description: "TO MATCH YOUR STYLE AND PERSONALITIY",
    link: "products.html",
    image: PerfumeHero,
  },
  1: {
    header: "THE SMOOTHEST JEWELLERY",
    description: "SIMPLE DESIGNS TO COMPLIMENT YOUR LOOK",
    link: "index.html",
    image: ChainsHero,
  },
  2: {
    header: "THE DOPEST CLOTHES",
    description: "UNIQUE BRANDS TO GET YOUR STYLE ON LOCK",
    link: "index.html",
    image: ClothesHero,
  },
};

export function HeroImages() {
  return (
    <div>
      {Object.keys(productChoices).map((key) => (
        <div className="hero-container" key={key}>
          <img
            className="hero-image"
            src={productChoices[key].image}
            alt="Product image"
          />
          <div className="overlay-text">
            <h1 className="hero-header">{productChoices[key].header}</h1>
            <p className="hero-p">{productChoices[key].description}</p>
            <Link to="/products">
              <button className="hero-button">SHOP HERE</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
