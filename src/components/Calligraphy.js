import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";

class Calligraphy extends Component {
  render() {
    return <h1 className="container">Calligraphy</h1>;
  }
}

export default workItem(Calligraphy, WORK_ROUTES.calligraphy);
