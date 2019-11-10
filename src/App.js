import React, { Component } from 'react';
import './App.scss';
import db from './img/db.svg';
import hero from './img/hero.png';
import headerHello from './img/header-hello.png';
import pageBreak from './img/page-break.png';
import iconLinkedin from './img/icon-linkedin.svg';
import iconBehance from './img/icon-behance.svg';
import arrow from './img/arrow.svg';
import titleArtwork from './img/title-artwork.png';
import imgArtwork from './img/artwork.png';
import titleCalligraphy from './img/title-calligraphy.png';
import imgCalligraphy from './img/calligraphy.jpg';
import titleFitted from './img/title-fitted.png';
import imgFitted from './img/fitted.png';
import titleMtn from './img/title-mtn.png';
import imgMtn from './img/mtn.png';
import titlePanasonic from './img/title-panasonic.png';
import imgPanasonic from './img/panasonic.svg';
import {
  HashRouter as Router,
  Route,
  Link,
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

              <h2>Social</h2>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/dana-baumgartner/">
                  <img className="social-link" src={iconLinkedin}></img>
                </a>
                <a href="https://www.behance.net/danabaumgartner">
                  <img className="social-link" src={iconBehance}></img>
                </a>
              </div>
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
  const elements = [
    [ imgPanasonic, titlePanasonic, 'panasonic' ],
    [ imgMtn, titleMtn, 'mtn' ],
    [ imgFitted, titleFitted, 'fitted' ],
    [ imgArtwork, titleArtwork, 'artwork' ],
    [ imgCalligraphy, titleCalligraphy, 'calligraphy' ]
  ].map( ([ imgSrc, titleImg, routeName ]) => {
    return <Link className="work-link" to={`/work/${routeName}`}>
      <div>
        <div className="img-wrapper">
          <img src={imgSrc} />
          <div className={`overlay work-link-${routeName}`}>
            <img src={arrow} />
          </div>
        </div>
        <img src={titleImg} />
      </div>
    </Link>
  });

  return <div class="work-links">
    {elements}
  </div>
}

export default App
