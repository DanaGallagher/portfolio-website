import React, { Component } from "react";
import Navigation from "./Navigation";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <Navigation />
        </div>
      </footer>
    );
  }
}
