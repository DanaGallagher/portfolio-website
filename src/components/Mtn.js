import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";

class Mtn extends Component {
  render() {
    return <h1 className="container">Mtn</h1>;
  }
}

export default workItem(Mtn, WORK_ROUTES.mtn);
