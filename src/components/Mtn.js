import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";
import mtnHeader from "../img/mtn-header.png";
import mtnProductImage from "../img/mtn-product-image.jpg";
import affinityMapImg from "../img/affinity-map.png";
import competitorAnalysisImg from "../img/competitor-analysis.png";
import userCenteredDesignImg from "../img/user-centered-design.png";
import persona1Img from "../img/persona-1.png";
import persona2Img from "../img/persona-2.png";
import persona3Img from "../img/persona-3.png";
import userFlow1Img from "../img/user-flow-1.png";
import userFlow2Img from "../img/user-flow-2.png";
import userFlow3Img from "../img/user-flow-3.png";
import siteMapImg from "../img/site-map.png";
import sketching1Img from "../img/sketching-1.png";
import lowFidelity1Img from "../img/low-fidelity-1.png";
import lowFidelity2Img from "../img/low-fidelity-2.png";
import lowFidelity3Img from "../img/low-fidelity-3.png";
import lowFidelity4Img from "../img/low-fidelity-4.png";
import grayScale1Img from "../img/gray-scale-1.png";
import grayScale2Img from "../img/gray-scale-2.png";
import grayScale3Img from "../img/gray-scale-3.png";
import grayScale4Img from "../img/gray-scale-4.png";
import grayScale5Img from "../img/gray-scale-5.png";
import highFid1Img from "../img/high-fid-1.png";
import highFid2Img from "../img/high-fid-2.png";
import designSystem1Img from "../img/design-system-1.png";
import designSystem2Img from "../img/design-system-2.png";
import designSystem3Img from "../img/design-system-3.png";
import designSystem4Img from "../img/design-system-4.png";
import designSystem5Img from "../img/design-system-5.png";
import "./Mtn.scss";

class Mtn extends Component {
  renderLinkedImage = (image, className) => {
    return (
      <a className={className} href={image}>
        <img src={image} />
      </a>
    );
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
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
              travelers of weather conditions and active mountain hazards. The
              app brings pertinent weather and hazard information to one
              convenient location and helps users plan and implement safe trips.
              The app will ultimately create a community of people who enjoy
              spending their free time in the great outdoors!
            </p>
          </div>
        </section>

        <section className="hero pink-section">
          <div className="hero-body container">
            <div className="columns">
              <div className="column">
                <h2>Problem Statement</h2>
                <p>
                  Our mountain sport enthusiasts need a way to view weather and
                  hazard information in a convenient, attractive, and
                  easy-to-understand app because they would rather be spending
                  their time enjoying the outdoors than searching for
                  information online.
                </p>
              </div>
              <div className="column">
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
        </section>

        <section className="section">
          <div className="container">
            <div className="image-explain">
              {this.renderLinkedImage(
                userCenteredDesignImg,
                "image-explain__image"
              )}

              <div className="image-explain__text">
                <h2>Process</h2>
                <p>
                  I used User-Centered Design throughout the entire project to
                  make sure that the product being created was geared towards
                  the users' needs and desires. This is an iterative process, so
                  as I gained more knowledge and progressed through the stages,
                  I was able to update and improve upon aspects of the project
                  that I had completed previously.
                </p>
              </div>
            </div>

            <div className="image-explain">
              <div className="image-explain__text">
                <h2>Competitor Analysis</h2>
                <p>
                  I completed Competitor analysis by analyzing two apps called
                  Wunderground and Mountain Hub. Wunderground was used to
                  compare weather features and Mountain Hub was used to compare
                  hazard reporting features. Competitor profiles were created
                  containing key objectives, overall strategy and market
                  advantage. From the data that was collected, SWOT profiles
                  were created.
                </p>
              </div>
              {this.renderLinkedImage(
                competitorAnalysisImg,
                "image-explain__image"
              )}
            </div>

            <div className="image-explain">
              {this.renderLinkedImage(affinityMapImg, "image-explain__image")}
              <div className="image-explain__text">
                <h2>User Research</h2>
                <p>
                  I completed user research by interviewing individuals who have
                  mountain sport experience. From the responses received, I
                  identified pain points and frustrations using an affinity map.
                </p>
              </div>
            </div>

            <div className="columns is-desktop">
              <div className="column">
                <div className="description-box">
                  <h2>User Personas</h2>
                  <p>
                    Based on the information gained from the competitor and user
                    research, I created user personas to represent the different
                    types of people that could benefit from the app.
                  </p>
                </div>

                <div className="text-center">
                  {this.renderLinkedImage(persona1Img, "users-image")}
                  {this.renderLinkedImage(persona2Img, "users-image")}
                  {this.renderLinkedImage(persona3Img, "users-image")}
                </div>
              </div>
              <div className="column">
                <div className="description-box">
                  <h2>User Flows</h2>
                  <p>
                    User personas were then translated into the initial user
                    flows. The flow follows the user in the necessary steps to
                    complete the designated task from entry point to the success
                    criteria.
                  </p>
                </div>

                <div className="text-center">
                  {this.renderLinkedImage(userFlow1Img, "users-image")}
                  {this.renderLinkedImage(userFlow2Img, "users-image")}
                  {this.renderLinkedImage(userFlow3Img, "users-image")}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero pink-section">
          <div className="hero-body container">
            <div className="columns">
              <div className="column">
                <h2>Site Map</h2>
                <p>
                  The site map visualizes the information architecture of the
                  app. The information architecture was first theorized with the
                  user flows and refined using an open card sort with a total of
                  6 participants.
                </p>
              </div>
              <div className="column">{this.renderLinkedImage(siteMapImg)}</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="text-section">
              <h2>Sketching and Wireframes</h2>
              <p className="center-align">
                Low to high-fidelity wireframes were created to bring hte app to
                life. The process started like most projects, with pen and
                paper. From there the wireframes increased in sophistication
                using programs such as Balsamiq and Sketch.
              </p>
            </div>

            <div className="text-center">
              {this.renderLinkedImage(sketching1Img)}
            </div>

            <div className="text-center">
              {this.renderLinkedImage(lowFidelity1Img)}
              {this.renderLinkedImage(lowFidelity2Img)}
            </div>

            <div className="text-center">
              {this.renderLinkedImage(lowFidelity3Img)}
              {this.renderLinkedImage(lowFidelity4Img)}
            </div>
          </div>
        </section>

        <section className="hero pink-section">
          <div className="hero-body container">
            <div className="text-section">
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
            </div>

            <div className="columns">
              <div className="column">
                {this.renderLinkedImage(grayScale1Img, "mid-fidelity-img")}
              </div>
              <div className="column">
                {this.renderLinkedImage(grayScale2Img, "mid-fidelity-img")}
              </div>
              <div className="column">
                {this.renderLinkedImage(grayScale3Img, "mid-fidelity-img")}
              </div>
              <div className="column">
                {this.renderLinkedImage(grayScale4Img, "mid-fidelity-img")}
              </div>
              <div className="column">
                {this.renderLinkedImage(grayScale5Img, "mid-fidelity-img")}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="text-section">
              <h2>Final Designs and Design System</h2>
              <p className="center-align">
                Final design was conceived from the mid-fidelity wireframes. It
                incorporates all the information gained from usability testing,
                A/B testing, and peer review. Color scheme, typography, buttons,
                etc. were all established to give a consistent feel to the app.
                To make sure that future iterations of the app maintained the
                design style, the design language was developed.
              </p>
            </div>
            <div className="text-center">
              {this.renderLinkedImage(highFid1Img)}
            </div>
            <div className="text-center">
              {this.renderLinkedImage(highFid2Img)}
            </div>
          </div>
        </section>

        <section className="hero pink-section">
          <div className="hero-body container">
            <h2 className="design-system-header">Design System</h2>

            <div className="columns">
              <div className="column">
                {this.renderLinkedImage(designSystem1Img, "box")}
              </div>
              <div className="column">
                {this.renderLinkedImage(designSystem2Img, "box")}
              </div>
              <div className="column">
                {this.renderLinkedImage(designSystem3Img, "box")}
              </div>
              <div className="column">
                {this.renderLinkedImage(designSystem4Img, "box")}
              </div>
              <div className="column">
                {this.renderLinkedImage(designSystem5Img, "box")}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default workItem(Mtn, WORK_ROUTES.mtn);
