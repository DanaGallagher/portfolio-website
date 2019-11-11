import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";
import calligraphyHeader from "../img/calligraphy-header.png";
import { CALLIGRAPHY_IMAGES } from "../image-paths";
import LightboxImageGallery from "./LightboxImageGallery";

class Calligraphy extends Component {
  render() {
    const photos = CALLIGRAPHY_IMAGES.map(({ src, width, height }) => ({
      src: `${process.env.PUBLIC_URL}/img/calligraphy/${src}`,
      width,
      height
    }));

    return (
      <div className="container center gallery">
        <img src={calligraphyHeader} alt="Calligraphy" />
        <LightboxImageGallery photos={photos} />
      </div>
    );
  }
}

export default workItem(Calligraphy, WORK_ROUTES.calligraphy);
