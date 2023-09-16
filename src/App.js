import "./App.css";
import HomePage from "./components/homepage/homepage";
import FirstSession from "./components/firstSession/firstSession";
import React, { useState, useEffect } from "react";
import Loader from "./components/pageLoader/pageLoader";
import SecondSession from "./components/secondSession/secondSession";
import ThirdSession from "./components/thirdSession/thirdSession";
import FourthSession from "./components/fourthSession/fourthSession";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
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

      <FourthSession />
    </div>
  );
}

export default App;
