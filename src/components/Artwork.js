import React, { Component } from "react";
import workItem from "./WorkItem";
import { WORK_ROUTES } from "./Work";
import artworkHeader from "../img/artwork-header.png";
import { ARTWORK_IMAGES } from "../image-paths";
import LightboxImageGallery from "./LightboxImageGallery";

class Artwork extends Component {
  render() {
    const photos = ARTWORK_IMAGES.map(({ src, width, height }) => ({
      src: `${process.env.PUBLIC_URL}/img/artwork/${src}`,
      width,
      height
    }));

    return (
      <div className="container center gallery">
        <img src={artworkHeader} alt="Calligraphy" />
        <LightboxImageGallery photos={photos} />
      </div>
    );
  }
}

export default workItem(Artwork, WORK_ROUTES.artwork);
