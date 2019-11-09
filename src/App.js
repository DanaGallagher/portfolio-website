import React, { Component } from 'react';
import './App.scss';
import db from './img/db.svg';
import hero from './img/hero.png';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <img src={db} className="site-logo" alt="logo" />
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
      </Router>
    )
  }
}

function Home() {
  return <div>
    <img src={hero} className="hero" alt="hero image" />

    Hello
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
