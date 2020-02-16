import React, { Component } from "react";
import arrow from "../img/arrow.svg";
import titleArtwork from "../img/title-artwork.png";
import imgArtwork from "../img/artwork.png";
import titleCalligraphy from "../img/title-calligraphy.png";
import imgCalligraphy from "../img/calligraphy.jpg";
import titleFitted from "../img/title-fitted.png";
import imgFitted from "../img/fitted.png";
import titleMtn from "../img/title-mtn.png";
import imgMtn from "../img/mtn.png";
import titlePanasonic from "../img/title-panasonic.png";
import imgPanasonic from "../img/panasonic.svg";
import { Link } from "react-router-dom";

export const WORK_ROUTES = {
  panasonic: "panasonic",
  mtn: "mtn",
  fitted: "fitted",
  artwork: "artwork",
  calligraphy: "calligraphy"
};

/**
 * Work Items
 * Formatted as [ Large Image, Title Image, Route name, Display name ]
 */
export const WORK_ITEMS = [
  [imgPanasonic, titlePanasonic, WORK_ROUTES.panasonic, "Cirrus by Panasonic"],
  [imgMtn, titleMtn, WORK_ROUTES.mtn, "MTN - Mountain Guide App"],
  [imgFitted, titleFitted, WORK_ROUTES.fitted, "Fitted - Personal Fitness App"],
  [imgArtwork, titleArtwork, WORK_ROUTES.artwork, "Artwork"],
  [imgCalligraphy, titleCalligraphy, WORK_ROUTES.calligraphy, "Calligraphy"]
];

class Work extends Component {
  render() {
    const elements = WORK_ITEMS.map(([imgSrc, titleImg, routeName]) => {
      return (
        <Link className="work-link" to={`/work/${routeName}`}>
          <div>
            <div className="img-wrapper">
              <img src={imgSrc} alt={`${routeName}`} />
              <div className={`overlay work-link-${routeName}`}>
                <img src={arrow} alt="" />
              </div>
            </div>
            <img src={titleImg} alt={`${routeName} Header`} />
          </div>
        </Link>
      );
    });

    return <div class="work-links">{elements}</div>;
  }
}

export default Work;
