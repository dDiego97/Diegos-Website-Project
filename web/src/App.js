import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WeatherApp from "./pages/WeatherApp";
import SQLProject from "./pages/SQLProject";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/sql-project" element={<SQLProject />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
