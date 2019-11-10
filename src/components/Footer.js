import React, { Component } from "react";
import pageBreak from "../img/page-break.png";
import iconLinkedin from "../img/icon-linkedin.svg";
import iconBehance from "../img/icon-behance.svg";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
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

          <img src={pageBreak} className="page-break" alt="Page break" />
          <div className="right-col">
            <h2>Contact</h2>
            <p>dana.s.baumgartner@gmail.com</p>

            <h2>Social</h2>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/dana-baumgartner/">
                <img
                  className="social-link"
                  src={iconLinkedin}
                  alt="LinkedIn Logo"
                ></img>
              </a>
              <a href="https://www.behance.net/danabaumgartner">
                <img
                  className="social-link"
                  src={iconBehance}
                  alt="Behance Logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
