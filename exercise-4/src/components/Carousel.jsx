import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to manage the current image */
  let [currentIndex, setCurrentIndex] = React.useState(0);

  /* You will need to hanle the click on left and right button */
  function handleLeftClick() {
    setCurrentIndex((currentIndex) => {
      if (atFirst(currentIndex)) {
        return currentIndex = images.length - 1;
      } else {
        return currentIndex -= 1;
      }
    });
  }

  function handleRightClick() {
    setCurrentIndex((currentIndex) => {
      if (atLast(currentIndex)) {
        return currentIndex = 0;
      } else {
        return currentIndex += 1;
      }
    });
  }

  /* You will need to manage the cases when we are on the last image or first image*/
  function atFirst(index) {
    if (index === 0) {
      return true;
    }
  }

  function atLast(index) {
    if (index === (images.length - 1)) {
      return true;
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick}/>

      {/* You will need to display the current image, not the first one.. */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick}/>
    </div>
  );
};
