import React from "react";
import css from "./index.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.container}>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Logo className={css.logo} />
          </li>
          <li><NavLink className={css.link} to="/home">Home</NavLink></li>
          <li><NavLink className={css.link} to="/about">About Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
