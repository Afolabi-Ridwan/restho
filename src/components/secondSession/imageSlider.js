import React, { useState, useEffect } from "react";
import "./imageSlider.css"; // Create a CSS file for styling

import firstImage from "./images/new-items1.png";
import secondImage from "./images/new-items5.png";
import thirdImage from "./images/new-items6.png";
import fourthImage from "./images/new-items2.png";
import fifthImage from "../images/banner-img-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [thirdImage, fifthImage, firstImage, fourthImage, secondImage];

const SliderComponent = () => {
  const [slideOut, setSlideOut] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(!slideOut);
    }, 10000);

    return () => clearInterval(interval);
  }, [slideOut]);

  //   const [clickState, updateClickState] = useState(false);
  //   function clickHandler() {
  //     updateClickState(true);
  //   }

  return (
    <div className="imgSlider">
      <FontAwesomeIcon
        // onClick={clickHandler}
        className="leftArrow"
        icon={faArrowLeft}
      />

      <div className="imgSliderContainer">
        <div className={`image-slider ${slideOut ? "" : "slide-in"}  `}>
          {images.map((image, index) => (
            <img
              className={index === images.length - 1 ? "lastImage" : ""}
              key={index}
              src={image}
              alt={`img ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <FontAwesomeIcon className="rightArrow" icon={faArrowRight} />
    </div>
  );
};

export default SliderComponent;
