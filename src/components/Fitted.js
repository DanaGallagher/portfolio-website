import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";

class Fitted extends Component {
  render() {
    return <h1 className="container">Fitted</h1>;
  }
}

export default workItem(Fitted, WORK_ROUTES.fitted);
