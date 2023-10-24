import { Link } from "react-router-dom";
import { useState } from "react";
import { postNewCustomer } from "../Crud";

export function NewCustomer() {
  alert(
    "PLEASE DO NOT ENTER SENSITIVE INFORMATION ON THIS PAGE YOU CAN REGISTER FALSE INFORMATION BUT I CREATED THIS PAGE TO TEST FIREBASE DATABASES :) THANK YOU!"
  );
  return (
    <div id="form-div">
      <Form />
      <ThankYouDiv />
    </div>
  );
}

function Form() {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    postcode: "",
    city: "",
    country: "",
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // Update the state with the new input value
    setCustomerDetails({
      ...customerDetails,
      [fieldName]: fieldValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    postNewCustomer(customerDetails);
    const customerForm = document.getElementById("profile-form");
    customerForm.style.display = "none";
    const thankYouDiv = document.getElementById("thank-you-div");
    thankYouDiv.style.display = "block";
    const nameText = document.getElementById("name-text");
    nameText.textContent = customerDetails.name.toUpperCase() + ", YOU LEGEND!";
  }

  return (
    <form onSubmit={handleSubmit} id="profile-form">
      <h2 className="form-h2">REGISTER HERE</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          NAME
        </label>
        <input
          type="text"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          className="form-control"
          name="country"
          id="country-input"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          onChange={handleInputChange}
          className="form-control"
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          PASSWORD
        </label>
        <input
          type="password"
          onChange={handleInputChange}
          className="form-control"
          name="password"
          id="exampleInputPassword1"
          required
        />
      </div>
      <button type="submit" id="new-login-but" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
}

function ThankYouDiv() {
  return (
    <div id="thank-you-div">
      <h3 id="name-text"></h3>
      <p id="thank-you-text">THANK YOU FOR REGISTERING!</p>
      <Link to="/profile">
        <button type="submit" className="confirm-but btn btn-primary">
          LOGIN
        </button>
      </Link>
    </div>
  );
}
