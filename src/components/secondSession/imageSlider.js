import React, { useState, useEffect } from "react";
import "./imageSlider.css"; // Create a CSS file for styling

import firstImage from "./images/new-items1.png";
import secondImage from "./images/new-items5.png";
import thirdImage from "./images/new-items6.png";
import fourthImage from "./images/new-items2.png";
import fifthImage from "../images/banner-img-4.png";

//   [thirdImage, fifthImage, firstImage, fourthImage, secondImage],

//   [firstImage, secondImage, thirdImage, fourthImage, fifthImage],

const images = [thirdImage, fifthImage, firstImage, fourthImage, secondImage];

const SliderComponent = () => {
  const [slideOut, setSlideOut] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(!slideOut);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideOut]);

  return (
    <div className="imgSliderContainer">
      <div className={`image-slider ${slideOut ? "slide-out" : "slide-in"}`}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`img ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
