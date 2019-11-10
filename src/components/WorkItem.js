import React, { Component } from "react";
import "./Work.scss";

function workItem(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
          Hello!
        </React.Fragment>
      );
    }
  };
}

export default workItem;
