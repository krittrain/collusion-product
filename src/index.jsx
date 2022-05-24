import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import Headline from "./components/Headline";
import Timer from "./components/Timer";
import Burger from "./assets/burger.svg";

const App = hot(() => (
  <div>
    <Headline>Welcome to React.</Headline>
    <Timer />

    <Burger style={{ width: 200, color: "blue" }} />
  </div>
));

render(<App />, document.getElementById("app"));
