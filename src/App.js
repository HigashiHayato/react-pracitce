import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Home from "./screen/Home";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
};

export default App;
