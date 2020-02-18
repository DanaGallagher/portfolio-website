import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "./Navigation";
import db from "../img/db.svg";
import "./Header.scss";

export default class Header extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  renderNavLinks = () => {
    return NAVIGATION_LINKS.map(link => {
      return (
        <NavLink
          className={`navbar-item ${link.className}-link`}
          exact
          to={link.route}
          onClick={this.closeMenu}
        >
          {link.name}
        </NavLink>
      );
    });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <nav
        className="navbar site-header"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container site-header__container">
          <div className="navbar-brand">
            <NavLink className="home-link navbar-item" exact to="/">
              <img src={db} className="site-header__site-logo" alt="logo" />
            </NavLink>

            <a
              role="button"
              className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              href="/#"
              onClick={this.toggleMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            className={`navbar-end navbar-menu ${menuOpen ? "is-active" : ""}`}
          >
            {this.renderNavLinks()}
          </div>
        </div>
      </nav>
    );
  }
}
