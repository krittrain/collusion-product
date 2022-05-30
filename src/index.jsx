import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import './index.css';


const App = hot(() => (
  <div>
    <Header/>
  </div>
));

render(<App />, document.getElementById("app"));
