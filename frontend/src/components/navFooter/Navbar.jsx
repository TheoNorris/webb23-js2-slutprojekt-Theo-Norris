import { Link } from "react-router-dom";
import logo from "../../images/gassedwhite.png";
import britishFlag from "../../images/britishflag.jpeg";
import swedishFlag from "../../images/swedishflag.png";

const perfumeProp = {
  perfumeProp1: "value1",
};
const clothesProp = "clothes";
const jewelryProp = "jewelry";

export function Navbar({ appBasketProducts }) {
  return (
    <div id="navbar-container">
      <div className="navbar">
        <LogoDiv image={logo} />
        <BrandDiv swedFlag={swedishFlag} britFlag={britishFlag} />
        <div className="user-basket-holder">
          <Link to="/profile">
            <i className="user-shop fa-solid fa-user"></i>
          </Link>
          {!appBasketProducts || appBasketProducts.length === 0 ? (
            <i className="cant-shop fa-solid fa-cart-shopping"></i>
          ) : (
            <Link to="/checkout">
              <div id="basket-holder">
                <p className="basket-quantity">{appBasketProducts.length}</p>
                <i className="user-shop fa-solid fa-cart-shopping"></i>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div id="collections-div">
        <Link to="/products" state={{ from: "perfume" }}>
          <h5 className="collection-links">PERFUMES</h5>
        </Link>
        <Link to="/products">
          <h5 className="collection-links">JEWELLERY</h5>
        </Link>
        <Link to="/products">
          <h5 className="collection-links">CLOTHES</h5>
        </Link>
      </div>
    </div>
  );
}

function LogoDiv(props) {
  return (
    <div>
      <Link to="/">
        <img id="logo-image" src={props.image} alt="Gassed logo" />
      </Link>
    </div>
  );
}

function BrandDiv(props) {
  return (
    <div id="brand-div">
      <img className="flag-image" src={props.swedFlag} alt="Sweddish flag" />
      <h2 id="brand-text">I'M GASSED... !</h2>
      <img className="flag-image" src={props.britFlag} alt="British flaf" />
    </div>
  );
}
