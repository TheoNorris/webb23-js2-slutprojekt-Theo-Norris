export function CheckoutProducts({
  product,
  appBasketProducts,
  setAppBasketProducts,
}) {
  function handleOnclick() {
    const productIndex = appBasketProducts.findIndex(
      (p) => p.id === product.id
    );
    if (productIndex !== -1) {
      const updatedBasket = [...appBasketProducts];
      updatedBasket.splice(productIndex, 1);

      setAppBasketProducts(updatedBasket);
    }
  }

  return (
    <div className="card-holder checkout-card">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <div>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <div id="price-quantity-checkout">
            <p>{product.price}SEK</p>
            <p>QTY: {product.quantity}</p>
          </div>
          <p>PRODUCT TOTAL: {product.quantity * product.price} SEK</p>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleOnclick}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
