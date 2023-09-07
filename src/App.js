import "./App.css";
import HomePage from "./components/homepage/homepage";
import FirstSession from "./components/firstSession/firstSession";
import React, { useState, useEffect } from "react";
import Loader from "./components/pageLoader/pageLoader";
import SecondSession from "./components/secondSession/secondSession";
import ThirdSession from "./components/thirdSession/thirdSession";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate some loading or async tasks
    setTimeout(() => {
      setLoadingComplete(true);
    }, 12000);
  }, []);

  return (
    <div className="App">
      {!loadingComplete ? <Loader /> : null}

      <HomePage />

      <FirstSession />
      <SecondSession />
      <ThirdSession />
    </div>
  );
}

export default App;
