import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export const NAVIGATION_LINKS = [
  { name: "Home", className: "home", route: "/" },
  { name: "About", className: "about", route: "/about" },
  { name: "Resume", className: "resume", route: "/resume" },
  { name: "Contact", className: "contact", route: "/contact" }
];

export default class Footer extends Component {
  renderNavLinks = () => {
    return NAVIGATION_LINKS.map(link => {
      return (
        <li>
          <NavLink className={`${link.className}-link`} exact to={link.route}>
            {link.name}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <nav>
        <ul>
          {}
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
