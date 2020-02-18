import React, { Component } from "react";
import hero from "../img/hero.png";
import Work from "./Work";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <img src={hero} className="hero" alt="Hero drawing" />

        <section className="section">
          <div className="container">
            <Work />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
