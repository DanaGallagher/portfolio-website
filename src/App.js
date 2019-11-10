import React, { Component } from "react";
import "./App.scss";
import Panasonic from "./components/Panasonic";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content container">
          <Header />

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/work/panasonic">
              <Panasonic />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
