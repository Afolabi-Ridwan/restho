import React, { useState, useEffect } from "react";
import "./pageLoader.css";
import firstImage from "../images/header1-logo.svg";

const Loader = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`loader ${loading ? "show" : "hide"}`}>
      <div className="count">
        {count}%
        <img src={firstImage} alt="s" />
      </div>
    </div>
  );
};

export default Loader;
