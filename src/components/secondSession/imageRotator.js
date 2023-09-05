import React, { useState, useEffect } from "react";
import "./imageRotator.css";

import firstImage from "./images/new-items1.png";
import secondImage from "./images/new-items5.png";
import thirdImage from "./images/new-items6.png";
import fourthImage from "./images/new-items2.png";

const images = [
  { src: firstImage, name: "Chicken Fried" },
  { src: secondImage, name: "Full Chicken" },
  { src: thirdImage, name: "Momo Package" },
  { src: fourthImage, name: "Vegetable Fried" },
];

const ImageRotator = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-rotator">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImage ? "active" : ""}`}
        >
          <img src={image.src} alt={image.name} />
          <p className="price"> Price - $8</p>
          <div className="name-tag">{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageRotator;
