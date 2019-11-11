import React, { Component } from "react";
import "./Work.scss";
import { WORK_ITEMS } from "./Work";
import { Link } from "react-router-dom";
import arrow from "../img/arrow-black.svg";
import "./WorkItem.scss";

function findIndexOfWorkItem(workItem) {
  for (let i = 0; i < WORK_ITEMS.length; i++) {
    if (WORK_ITEMS[i][2] === workItem) {
      return i;
    }
  }
}

function findPreviousWorkItemIndex(currWorkItem) {
  const index = findIndexOfWorkItem(currWorkItem);
  return (index + WORK_ITEMS.length - 1) % WORK_ITEMS.length;
}

function findNextWorkItemIndex(currWorkItem) {
  const index = findIndexOfWorkItem(currWorkItem);
  return (index + WORK_ITEMS.length + 1) % WORK_ITEMS.length;
}

function createPreviousLink(currWorkItem) {
  const prevIndex = findPreviousWorkItemIndex(currWorkItem);
  const prevWorkItem = WORK_ITEMS[prevIndex];

  return createLink(prevWorkItem, false);
}

function createNextLink(currWorkItem) {
  const nextIndex = findNextWorkItemIndex(currWorkItem);
  const nextWorkItem = WORK_ITEMS[nextIndex];

  return createLink(nextWorkItem, true);
}

function createLink(item, isNext) {
  return (
    <Link
      className={`work-nav-button ${!isNext ? "prev" : ""}`}
      to={`/work/${item[2]}`}
    >
      <h3>{isNext ? "Next" : "Previous"}</h3>
      <div>
        <span>{item[3]}</span>
        <img src={arrow} className="left-arrow" />
      </div>
    </Link>
  );
}

function workItem(WrappedComponent, currentRoute) {
  return class extends Component {
    render() {
      return (
        <React.Fragment>
          <div className="work-content">
            <WrappedComponent {...this.props} />
          </div>

          <div className="previous-next-navigation-wrapper">
            <div className="previous-next-navigation container">
              {createPreviousLink(currentRoute)}
              {createNextLink(currentRoute)}
            </div>
          </div>
        </React.Fragment>
      );
    }
  };
}

export default workItem;
