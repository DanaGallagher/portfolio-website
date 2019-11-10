import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import db from "../img/db.svg";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink className="home-link" exact to="/">
          <img src={db} className="site-logo" alt="logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink className="home-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="work-link" to="/work">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink className="resume-link" to="/resume">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink className="contact-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
