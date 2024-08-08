import React from 'react';
import logo from '../assets/img/small-logo.svg';
import 'material-icons/iconfont/material-icons.css';


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <i className="material-icons menuIcon">menu</i>
      <nav className="menuList">
        <a className="menuItem" href="#">
          A experiência
        </a>
        <a className="menuItem" href="#">
          Mapa de setores
        </a>
        <a className="menuItem" href="#">
          Ingresso
        </a>
        <a className="menuItem" href="#">
          FAQ
        </a>
      </nav>
    </header>
  );
}

export default Header;
