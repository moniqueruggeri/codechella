import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <i className="material-icons menuIcon" onClick={toggleMenu}>
        menu
      </i>
        <nav className={`menuList ${isMenuOpen ? "open" : "closed"}`}>
          <Link to="/Experiencia" className="menuItem"> A Experiência </Link>
          <Link to="/MapaDeSetores" className="menuItem">Mapa de Setores </Link>
          <Link to="/Ingresso" className="menuItem"> Ingresso </Link> 
          <Link to="/Faq" className="menuItem"> FAQ </Link> 
        </nav>
    </>
  );
};

export default Menu;
