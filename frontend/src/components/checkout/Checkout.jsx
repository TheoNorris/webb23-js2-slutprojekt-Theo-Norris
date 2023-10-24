import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CheckoutProducts } from "./CheckoutProducts";
import { patchProd } from "../Crud";

export function Checkout({ appBasketProducts, setAppBasketProducts }) {
  const navigate = useNavigate();

  if (!appBasketProducts || appBasketProducts.length === 0) {
    return (
      <div className="checkout-div">
        <div className="empty-div">
          <p className="empty-text">
            THERE ARE NO PRODUCTS CURRENTLY IN THE BASKET.
          </p>
          <Link to="/products">
            <button
              type="submit"
              className="confirm-but new-login-but btn btn-primary"
            >
              PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const totalProducts = appBasketProducts.reduce(
    (total, product) => total + parseInt(product.quantity, 10),
    0
  );
  const totalPrice = appBasketProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    appBasketProducts.forEach((product) => {
      console.log("products", product);
      patchProd(product);
    });

    navigate("/checkoutdetails");
  }

  return (
    <div className="checkout-div">
      <div className="checkout-product-div">
        {appBasketProducts.map((product, index) => (
          <div className="checkout-container-div" key={index}>
            <CheckoutProducts
              product={product}
              appBasketProducts={appBasketProducts}
              setAppBasketProducts={setAppBasketProducts}
            />
          </div>
        ))}
      </div>
      <div id="checkout-products">
        <p>Total Number of Products: {totalProducts}</p>
        <p>Total Cost: {totalPrice} SEK</p>
        <form action="" onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary">
            COMPLETE PURCHASE
          </button>
        </form>
      </div>
    </div>
  );
}
