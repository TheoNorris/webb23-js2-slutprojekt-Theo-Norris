import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { customerLogginIn } from "../UseAuth";
import { useState } from "react";

export function CheckoutDetails({ setAppBasketProducts }) {
  return (
    <div id="form-div">
      <Form setAppBasketProducts={setAppBasketProducts} />
      <ThankYouDiv />
    </div>
  );
}

function Form({ setAppBasketProducts }) {
  const customerLoggedIn = customerLogginIn();

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    const customerForm = document.getElementById("profile-form");
    customerForm.style.display = "none";
    const thankYouDiv = document.getElementById("thank-you-div");
    thankYouDiv.style.display = "block";
    const nameText = document.getElementById("name-text");

    setAppBasketProducts([]);

    console.log(customerLoggedIn);
    if (Object.keys(customerLoggedIn).length === 0) {
      nameText.textContent = "YOU ARE A LEGEND!";
    } else {
      nameText.textContent =
        customerLoggedIn.name.toUpperCase() + ", YOU LEGEND!";
    }
  }

  return (
    <>
      {customerLoggedIn === undefined ? (
        <form onSubmit={handleSubmit} id="profile-form">
          <h2 className="form-h2">DELIVERY INFORMATION</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              NAME
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name-input"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              ADDRESS
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address-input"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              POSTCODE
            </label>
            <input
              type="text"
              className="form-control"
              name="postcode"
              id="postcode-input"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              CITY
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city-input"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              COUNTRY
            </label>
            <input
              type="text"
              className="form-control"
              name="country"
              id="country-input"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} id="profile-form">
          <h2 className="form-h2">DELIVERY INFORMATION</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              NAME
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name-input"
              defaultValue={customerLoggedIn.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              ADDRESS
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address-input"
              defaultValue={customerLoggedIn.address}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              POSTCODE
            </label>
            <input
              type="text"
              className="form-control"
              name="postcode"
              id="postcode-input"
              defaultValue={customerLoggedIn.postcode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              CITY
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city-input"
              defaultValue={customerLoggedIn.city}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              COUNTRY
            </label>
            <input
              type="text"
              className="form-control"
              name="country"
              id="country-input"
              defaultValue={customerLoggedIn.country}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      )}
    </>
  );
}

function ThankYouDiv() {
  return (
    <div id="thank-you-div">
      <h3 id="name-text"></h3>
      <p id="thank-you-text">THANK YOU SHOPPING WITH GASSED!</p>
      <Link to="/">
        <button
          type="submit"
          className="confirm-but new-login-but btn btn-primary"
        >
          HOME
        </button>
      </Link>
    </div>
  );
}
