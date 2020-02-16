import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink className="home-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="about-link" to="/about">
              About
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
    );
  }
}
