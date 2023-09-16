// import React, { useState, useEffect } from "react";
import "./middleText.css";
import firstImage from "../images/sub-title-vec.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

function MiddleText() {
  const info = [
    {
      header: "Welcome to Restho",
      image: firstImage,
      firstNote: "Find Your Best Healthy & Tasty Food",
      secondNote:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
      arrow: <FontAwesomeIcon icon={faArrowTrendUp} />,
      button: "Discover More",
      id: 1,
    },
    // {
    //   header: "Welcome to Restho",
    //   image: firstImage,
    //   firstNote: "Find Your Best Healthy & Tasty Food",
    //   secondNote:
    //     "It is a long established fact that a reader will be distracted by the readable content of a page",
    //   arrow: <FontAwesomeIcon icon={faArrowTrendUp} />,
    //   button: "Discover More",
    //   id: 2,
    // },
  ];

  // const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % info.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="middleTexts">
      {info.map((eachInfo, index) => (
        <div
          className={`fade-container`}
          // className={`fade-container ${index === currentImage ? "active" : ""}`}
          key={eachInfo.id}
        >
          <p>
            {" "}
            <img
              style={{ marginRight: "10px" }}
              className="icon"
              src={eachInfo.image}
              alt="sn"
            />{" "}
            {eachInfo.header}
            <img
              style={{ marginLeft: "10px" }}
              className="icon"
              src={eachInfo.image}
              alt="sn"
            />
          </p>
          <h1>{eachInfo.firstNote}</h1>

          <p>{eachInfo.secondNote}</p>

          <h4>
            {" "}
            <span> {eachInfo.arrow}</span> {eachInfo.button}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default MiddleText;
