import React, { useState } from "react";
import { patchProd } from "../Crud";

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
  const [outOfStock, setOutOfStock] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(quantity);

  function handleChange(e) {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity >= 0 && newQuantity <= quantity) {
      setProductQuantity(newQuantity);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(typeof productQuantity);

    if (productQuantity === 0) {
      // Do nothing when quantity is 0
      return;
    } else if (productQuantity > availableQuantity) {
      document.getElementById(
        `warning-${id}`
      ).innerText = `${availableQuantity} REMAINING, TRY AGAIN.`;
      return;
    }
    if (availableQuantity - productQuantity <= 0) {
      setAvailableQuantity(0);
      setOutOfStock(true);
    } else {
      setAvailableQuantity(availableQuantity - productQuantity);
    }

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
          <div id="form-stock-div">
            {quantity > 0 && outOfStock == false && (
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
                {availableQuantity <= 20 && (
                  <p id={`warning-${id}`} className="qty-warning">
                    ONLY {availableQuantity} LEFT IN STOCK
                  </p>
                )}
                <button type="submit" id="buy-btn" className="btn btn-primary">
                  ADD TO BASKET
                </button>
              </form>
            )}
            {quantity == 0 && <p className="out-of-stock">OUT OF STOCK</p>}
            {outOfStock && <p className="out-of-stock">OUT OF STOCK</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
