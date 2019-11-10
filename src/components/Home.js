import React, { Component } from "react";
import hero from "../img/hero.png";
import headerHello from "../img/header-hello.png";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <img src={hero} className="hero" alt="Hero drawing" />

        <section className="row hello-section">
          <div class="flex-none">
            <img src="http://placekitten.com/547/700" alt="Dana" />
          </div>
          <div className="flex-grow">
            <img src={headerHello} alt="Hello, I'm Dana" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
