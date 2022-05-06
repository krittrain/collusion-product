import React from "react";
import css from "./index.css";

const Headline = ({ children }) => (
  <h1 className={css.container}>{children}</h1>
);

export default Headline;
