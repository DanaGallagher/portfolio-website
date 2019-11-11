import React, { Component } from "react";
import "./App.scss";
import Work, { WORK_ROUTES } from "./components/Work";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Panasonic from "./components/Panasonic";
import Artwork from "./components/Artwork";
import Calligraphy from "./components/Calligraphy";
import Mtn from "./components/Mtn";
import Fitted from "./components/Fitted";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Header />

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path={`/work/${WORK_ROUTES.panasonic}`}>
              <Panasonic />
            </Route>
            <Route path={`/work/${WORK_ROUTES.mtn}`}>
              <Mtn />
            </Route>
            <Route path={`/work/${WORK_ROUTES.fitted}`}>
              <Fitted />
            </Route>
            <Route path={`/work/${WORK_ROUTES.artwork}`}>
              <Artwork />
            </Route>
            <Route path={`/work/${WORK_ROUTES.calligraphy}`}>
              <Calligraphy />
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
