import React, { Component } from "react";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../src/component/sidebar/sidebar";
import About from "../src/component/about/about";
import Education from "../src/component/education/education";
import Interest from "../src/component/skills/interest";
import CarouselImages from "../src/component/carousel/carouselImages.js";
import "../src/component/carousel/carouselImages.module.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="side">
            <nav className="navbar side navbar-expand-lg navbar-light p-0">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                style={{ zIndex: "1" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className="main">
            <div>
              <CarouselImages />
            </div>
            <About />
            <Interest />
            <Education />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
