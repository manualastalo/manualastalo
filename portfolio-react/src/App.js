import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"; // Make sure to create this file for custom styles

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
