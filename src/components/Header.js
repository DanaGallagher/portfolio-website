import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import db from "../img/db.svg";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header class="container">
        <NavLink className="home-link" exact to="/">
          <img src={db} className="site-logo" alt="logo" />
        </NavLink>
        <Navigation />
      </header>
    );
  }
}
