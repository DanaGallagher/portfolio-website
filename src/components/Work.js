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

class Work extends Component {
  render() {
    const elements = [
      [imgPanasonic, titlePanasonic, "panasonic"],
      [imgMtn, titleMtn, "mtn"],
      [imgFitted, titleFitted, "fitted"],
      [imgArtwork, titleArtwork, "artwork"],
      [imgCalligraphy, titleCalligraphy, "calligraphy"]
    ].map(([imgSrc, titleImg, routeName]) => {
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
