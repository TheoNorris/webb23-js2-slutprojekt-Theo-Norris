import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./navFooter/Navbar";
import { Footer } from "./navFooter/Footer";
import { HomePage } from "./home/Home";
import { Products } from "./products/Products";
import { ProfilePage } from "./customers/Profile";
import { NewCustomer } from "./customers/NewCustomer";
import { Checkout } from "./checkout/Checkout";
import { CheckoutDetails } from "./checkout/CheckoutDetails";
import { useState, useEffect } from "react";

export function App() {
  const [appBasketProducts, setAppBasketProducts] = useState([]);

  useEffect(() => {}, [appBasketProducts]);

  return (
    <Router>
      <>
        <Navbar appBasketProducts={appBasketProducts} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<Products setAppBasketProducts={setAppBasketProducts} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/newcustomer" element={<NewCustomer />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                appBasketProducts={appBasketProducts}
                setAppBasketProducts={setAppBasketProducts}
              />
            }
          />
          <Route
            path="/checkoutdetails"
            element={
              <CheckoutDetails setAppBasketProducts={setAppBasketProducts} />
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
