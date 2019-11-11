import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";

class Panasonic extends Component {
  render() {
    return <h1 className="container">Panasonic</h1>;
  }
}

export default workItem(Panasonic, WORK_ROUTES.panasonic);
