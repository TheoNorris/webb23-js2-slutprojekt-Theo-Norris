import React, { useState } from "react";

export function ProductPage({
  id,
  name,
  price,
  description,
  quantity,
  image,
  setBasketProducts,
}) {
  const [productQuantity, setProductQuantity] = useState(1);

  function handleChange(e) {
    const newQuantity = e.target.value;

    if (newQuantity >= 0 && newQuantity <= quantity) {
      setProductQuantity(newQuantity);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const tempProduct = {
      image,
      name,
      description,
      price,
      quantity: productQuantity,
      id,
    };

    setBasketProducts((prevBasket) => {
      const index = prevBasket.findIndex(
        (product) =>
          product.name === tempProduct.name &&
          product.description === tempProduct.description &&
          product.price === tempProduct.price &&
          product.id === tempProduct.id
      );

      if (index !== -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[index].quantity += tempProduct.quantity;
        return updatedBasket;
      } else {
        return [...prevBasket, tempProduct];
      }
    });
  }

  return (
    <div className="card-holder">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div>
            {quantity > 0 && (
              <form className="basket-form" onSubmit={handleSubmit}>
                <div className="price-qty-holder">
                  <p>{price}SEK</p>
                  <div className="qty-holder">
                    <p className="qty-pholder">QTY: </p>
                    <input
                      className="qty-input"
                      type="number"
                      value={productQuantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {quantity <= 5 ? (
                  <p className="qty-warning">ONLY {quantity} LEFT IN STOCK</p>
                ) : (
                  <p className="qty-success">ONLY {quantity} LEFT IN STOCK</p>
                )}
                <button type="submit" className="btn btn-primary">
                  ADD TO BASKET
                </button>
              </form>
            )}
            {quantity === 0 && <p className="out-of-stock">OUT OF STOCK</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
