import React, { useState } from "react";
import Button from "./Button";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <i className="material-icons menuIcon" onClick={toggleMenu}>menu</i>
      <nav className={`menuList ${isMenuOpen ? "open" : "closed"}`} >
        <Button text="A experiência" className="menuItem" href="/experiencia" />
        <Button
          text="Mapa de setores"
          className="menuItem"
          href="/mapadesetores"
        />
        <Button text="Ingresso" className="menuItem" href="/ingresso" />
        <Button text="FAQ" className="menuItem" href="/faq" />
      </nav>
    </>
  );
};

export default Menu