import React from "react";
import { render } from "react-dom";
import Headline from "./components/Headline";
import Timer from "./components/Timer";

render(
  <div>
    <Headline>Welcome to React</Headline>
    <Timer />
  </div>,
  document.getElementById("app")
);
