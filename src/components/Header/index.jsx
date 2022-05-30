import React from "react";
import css from "./index.css";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={css.container}>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Logo className={css.logo} />
          </li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
