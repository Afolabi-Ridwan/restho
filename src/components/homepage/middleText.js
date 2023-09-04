// import React, { useState, useEffect } from "react";
import "./middleText.css";
import firstImage from "../images/sub-title-vec.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

function MiddleText() {


  return (
    <div className={`fade-container`}>
      <p>
        {" "}
        <img
          style={{ marginRight: "10px" }}
          className="icon"
          src={firstImage}
          alt="sn"
        />{" "}
        Welcome to Restho{" "}
        <img
          style={{ marginLeft: "10px" }}
          className="icon"
          src={firstImage}
          alt="sn"
        />
      </p>
      <h1>Find Your Best Healthy & Tasty Food</h1>

      <p>
        {" "}
        It is a long established fact that a reader will be distracted by the
        readable content of a page
      </p>

      <h4>
        {" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </span>{" "}
        Discover More{" "}
      </h4>
    </div>
  );
}

export default MiddleText;
