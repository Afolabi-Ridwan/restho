import React, { useState, useEffect } from "react";
import "./thirdSessionTabs.css";
import firstImage from "./images/populer1.png";
import secondImage from "./images/populer2.png";
import thirdImage from "./images/populer3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const infoData = [
  {
    image: secondImage,
    priceTage: "$25",
    rating: [
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
    ],
    review: "Review(54)",
    name: "Beef Machal",
    note: "It is a long established fact that a reader will be distracted",
  },
  {
    image: firstImage,
    priceTage: "$10",
    rating: [
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
    ],
    review: "Review(37)",
    name: "Beef Biriyani",
    note: "It is a long established fact that a reader will be distracted",
  },
  {
    image: thirdImage,
    priceTage: "$18",
    rating: [
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
    ],
    review: "Review(54)",
    name: "Thai Soup",
    note: "It is a long established fact that a reader will be distracted",
  },
];

function ThirdSessionTabs() {
  const [info, setInfo] = useState(infoData);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % info.length;
        if (nextIndex === 0) {
          setInfo((prevInfo) => [
            prevInfo[prevInfo.length - 1],
            ...prevInfo.slice(0, prevInfo.length - 1),
          ]);
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [info]);

  return (
    <div className="tabsSession">
      <div className="tabs">
        {info.map((eachTab, index) => (
          <div
            className={`tabContainer ${
              index === currentIndex
                ? "active"
                : "" || index === 1 || 2
                ? "remove"
                : ""
            } `}
            style={index === 1 ? { margin: "0 40px" } : { margin: "0px" }}
          >
            <div className="image">
              <img src={eachTab.image} alt="ss" />
              <p> {eachTab.priceTage}</p>
            </div>

            <div className={"tab firstTab"}>
              <div className="note">
                {eachTab.rating.map((eachRating) => (
                  <span style={{ color: "var(--creamish)" }}>{eachRating}</span>
                ))}
                <span> {eachTab.review}</span>

                <h1> {eachTab.name}</h1>

                <p>{eachTab.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdSessionTabs;
