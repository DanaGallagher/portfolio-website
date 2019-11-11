import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class LightboxImageGallery extends Component {
  state = { modalIsOpen: false };

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  closeLightbox = () => {
    this.setState(state => ({ modalIsOpen: false }));
  };

  openLightbox = (event, { photo, index }) => {
    this.setState(state => ({ modalIsOpen: true, index }));
  };

  render() {
    const { modalIsOpen, index } = this.state;

    return (
      <React.Fragment>
        <Gallery
          photos={this.props.photos}
          direction={"column"}
          onClick={this.openLightbox}
        />
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={index}
                views={this.props.photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </React.Fragment>
    );
  }
}

export default LightboxImageGallery;
