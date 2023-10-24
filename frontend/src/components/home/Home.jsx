import { HeroImages } from "./Heroimages";
import { customerLogginIn } from "../UseAuth";
import { useEffect, useState } from "react";

export function HomePage() {
  const customerLoggedIn = customerLogginIn();

  return (
    <>
      {customerLoggedIn === undefined ? (
        <div>
          <p className="welcome-p">
            WELCOME TO GASSED! THE FRESHEST SCENTS, THE SMOOTHEST JEWELLERY, THE
            DOPEST CLOTHES.
          </p>
        </div>
      ) : customerLoggedIn && Object.keys(customerLoggedIn).length === 0 ? (
        <div>
          <p className="welcome-p">
            WELCOME TO GASSED! THE FRESHEST SCENTS, THE SMOOTHEST JEWELLERY, THE
            DOPEST CLOTHES.
          </p>
        </div>
      ) : (
        <div>
          <p className="welcome-p">
            WELCOME, {customerLoggedIn.name.toUpperCase()}! ENJOY ALL WE'VE GOT
            TO OFFER!
          </p>
        </div>
      )}
      <HeroImages />
    </>
  );
}
