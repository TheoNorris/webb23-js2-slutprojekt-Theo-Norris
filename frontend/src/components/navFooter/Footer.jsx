export function Footer() {
  return (
    <div id="footer-div">
      <AboutUs />
      <ContactUs />
      <TAndC />
      <Socials />
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <a href="">
        <h5>ABOUT US</h5>
      </a>
      <a href="">
        <h5>ABOUT GASSED</h5>
      </a>
      <a href="">
        <h5>BECOME AN AFFILIATE</h5>
      </a>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <a href="">
        <h5>CUSTOMER SERVICE</h5>
      </a>
      <a href="">
        <h5>CONTACT US</h5>
      </a>
      <a href="">
        <h5>DELIVERIES AND RETURNS</h5>
      </a>
    </div>
  );
}

function TAndC() {
  return (
    <div>
      <a href="">
        <h5>T&C'S</h5>
      </a>
      <a href="">
        <h5>USER T&C'S</h5>
      </a>
      <a href="">
        <h5>BUYER T&C'S</h5>
      </a>
    </div>
  );
}

function Socials() {
  return (
    <div id="socials">
      <a href="">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
}
