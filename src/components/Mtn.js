import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";
import mtnHeader from "../img/mtn-header.png";
import mtnProductImage from "../img/mtn-product-image.jpg";
import "./Mtn.scss";

class Mtn extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container center">
          <img
            className="mtn-header"
            src={mtnHeader}
            alt="Mtn - Mountain Guide App"
          />
          <img
            className="mtn-product-image"
            src={mtnProductImage}
            alt="Mtn app being used"
          />

          <p className="center-align">
            MTN is a mobile app that looks to inform mountain enthusiasts and
            travelers of weather conditions and active mountain hazards. The app
            brings pertinent weather and hazard information to one convenient
            location and helps users plan and implement safe trips. The app will
            ultimately create a community of people who enjoy spending their
            free time in the great outdoors!
          </p>
        </div>

        <div className="pink-section">
          <div className="container flex">
            <div>
              <h2>Problem Statement</h2>
              <p>
                Our mountain sport enthusiasts need a way to view weather and
                hazard information in a convenient, attractive, and
                easy-to-understand app because they would rather be spending
                their time enjoying the outdoors than searching for information
                online.
              </p>
            </div>
            <div>
              <h2>Hypothesis</h2>
              <p>
                We believe that by providing a resource that combines weather
                and hazard data in one convenient app, we can help mountain
                aficionados maintain safe habits and be informed on potential
                risks.
              </p>
            </div>
          </div>
        </div>

        <div className="container center">
          <div className="image-explain">
            <img src="http://placehold.jp/611x500.png" />
            <div>
              <h2>Process</h2>
              <p>
                I used User-Centered Design throughout the entire project to
                make sure that the product being created was geared towards the
                users' needs and desires. This is an iterative process, so as I
                gained more knowledge and progressed through the stages, I was
                able to update and improve upon aspects of the project that I
                had completed previously.
              </p>
            </div>
          </div>

          <div className="image-explain">
            <div>
              <h2>Competitor Analysis</h2>
              <p>
                I completed Competitor analysis by analyzing two apps called
                Wunderground and Mountain Hub. Wunderground was used to compare
                weather features and Mountain Hub was used to compare hazard
                reporting features. Competitor profiles were created containing
                key objectives, overall strategy and market advantage. From the
                data that was collected, SWOT profiles were created.
              </p>
            </div>
            <img src="http://placehold.jp/792x753.png" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default workItem(Mtn, WORK_ROUTES.mtn);
