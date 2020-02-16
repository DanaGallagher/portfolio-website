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

          <div className="image-explain">
            <img src="http://placehold.jp/887x665.png" />
            <div>
              <h2>User Research</h2>
              <p>
                I completed user research by interviewing individuals who have
                mountain sport experience. From the responses received, I
                identified pain points and frustrations using an affinity map.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <h2>User Personas</h2>
              <p>
                Based on the information gained from the competitor and user
                research, I created user personas to represent the different
                types of people that could benefit from the app.
              </p>

              <img src="http://placehold.jp/480x371.png" />
              <img src="http://placehold.jp/480x371.png" />
              <img src="http://placehold.jp/480x371.png" />
            </div>
            <div>
              <h2>User Flows</h2>
              <p>
                User personas were then translated into the initial user flows.
                The flow follows the user in the necessary steps to complete the
                designated task from entry point to the success criteria.
              </p>

              <img src="http://placehold.jp/565x371.png" />
              <img src="http://placehold.jp/565x371.png" />
              <img src="http://placehold.jp/565x371.png" />
            </div>
          </div>
        </div>

        <div className="pink-section">
          <div className="container">
            <div className="image-explain">
              <div>
                <h2>Site Map</h2>
                <p>
                  The site map visualizes the information architecture of the
                  app. The information architecture was first theorized with the
                  user flows and refined using an open card sort with a total of
                  6 participants.
                </p>
              </div>
              <img src="http://placehold.jp/900x1327.png" />
            </div>
          </div>
        </div>

        <div className="center container">
          <h2>Sketching and Wireframes</h2>
          <p className="center-align">
            MTN is a mobile app that looks to inform mountain enthusiasts and
            travelers of weather conditions and active mountain hazards. The app
            brings pertinent weather and hazard information to one convenient
            location and helps users plan and implement safe trips. The app will
            ultimately create a community of people who enjoy spending their
            free time in the great outdoors!
          </p>

          <div className="inline-images">
            <img src="http://placehold.jp/900x675.png" />
            <img src="http://placehold.jp/506x675.png" />
          </div>

          <div className="inline-images">
            <img src="http://placehold.jp/621x388.png" />
            <img src="http://placehold.jp/599x387.png" />
          </div>

          <div className="inline-images">
            <img src="http://placehold.jp/617x395.png" />
            <img src="http://placehold.jp/406x396.png" />
          </div>
        </div>

        <div className="pink-section">
          <div className="container center">
            <h2>Mid-Fidelity</h2>
            <p className="center-align">
              Initial prototype was generated using the mid-fidelity sketch
              wireframes and were animated with Invision. User interviews were
              conducted to see if there were any major usability issues.
              Furthermore, an A/B preference test was completed to test the
              layout of the home screen. For an in-depth look at the
              documentation of the user interviews and A/B test refer to the
              link below: User Testing Documentation
            </p>

            <img src="http://placehold.jp/375x667.png" />
            <img src="http://placehold.jp/375x667.png" />
            <img src="http://placehold.jp/375x667.png" />
            <img src="http://placehold.jp/375x667.png" />
            <img src="http://placehold.jp/375x667.png" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default workItem(Mtn, WORK_ROUTES.mtn);
