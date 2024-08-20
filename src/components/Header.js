import React, { useEffect, useState } from "react";
import logo from "../assets/img/small-logo.svg";
import "material-icons/iconfont/material-icons.css";
import Menu from "./Menu";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <img src={logo} alt="logo" />
      <Menu />
    </header>
  );
}

export default Header;
