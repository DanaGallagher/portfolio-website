import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";

class Artwork extends Component {
  render() {
    return <h1 className="container">Artwork</h1>;
  }
}

export default workItem(Artwork, WORK_ROUTES.artwork);
