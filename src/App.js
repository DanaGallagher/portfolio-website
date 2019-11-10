import React, { Component } from 'react';
import './App.scss';
import db from './img/db.svg';
import hero from './img/hero.png';
import headerHello from './img/header-hello.png';
import pageBreak from './img/page-break.png';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content container">
          <header>
            <NavLink className="home-link" exact to="/">
              <img src={db} className="site-logo" alt="logo" />
            </NavLink>
            <nav>
              <ul>
                <li>
                  <NavLink className="home-link" exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="work-link" to="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink className="resume-link" to="/resume">Resume</NavLink>
                </li>
                <li>
                  <NavLink className="contact-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <div className="container">
            <nav>
              <ul>
                <li>
                  <NavLink className="home-link" exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="work-link" to="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink className="resume-link" to="/resume">Resume</NavLink>
                </li>
                <li>
                  <NavLink className="contact-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            <img src={pageBreak} className="page-break" alt="Page break" />
            <div className="right-col">
              <h2>Contact</h2>
              <p>dana.s.baumgartner@gmail.com</p>
            </div>
          </div>
        </footer>
      </Router>
    )
  }
}

function Home() {
  return <div>
    <img src={hero} className="hero" alt="Hero drawing" />

    <section className="row hello-section">
      <div class="flex-none">
        <img src="http://placekitten.com/547/700" alt="Dana" />
      </div>
      <div className="flex-grow">
        <img src={headerHello} alt="Hello, I'm Dana" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  </div>
}

function Resume() {
  return <h2>Resume</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

function Work() {
  return <h2>Work</h2>
}

export default App
