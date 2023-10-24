import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../UseAuth";

export function ProfilePage() {
  return (
    <div id="form-div">
      <Form />
    </div>
  );
}

function Form() {
  const navigate = useNavigate();
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  function handleInputChange(e) {
    const fieldText = e.target.value;
    e.target.type === "email"
      ? setCustomerEmail(fieldText)
      : setCustomerPassword(fieldText);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const customerLoggedIn = await useAuth(customerEmail, customerPassword);

    if (customerLoggedIn != undefined) {
      navigate("/");
    } else {
      const failP = document.createElement("h1");
      failP.className = "fail-p";
      failP.textContent = "INVALID EMAIL OR PASSWORD PLEASE TRY AGAIN";
      const profileForm = document.getElementById("profile-form");
      profileForm.appendChild(failP);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="profile-form">
      <h2 className="form-h2">CUSTOMER LOGIN</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          onChange={handleInputChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          CHECK ME OUT!
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        LOGIN
      </button>

      <label className="new-customer form-check-label" htmlFor="exampleCheck1">
        ARE YOU A NEW CUSTOMER?
      </label>
      <Link to="/newcustomer">
        <button type="submit" className="btn btn-primary">
          REGISTER HERE!
        </button>
      </Link>
    </form>
  );
}
