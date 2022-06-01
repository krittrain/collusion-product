import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = hot(() => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
));

render(<App />, document.getElementById("app"));
