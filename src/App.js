import "./App.css";
import HomePage from "./components/homepage/homepage";
import FirstSession from "./components/firstSession/firstSession";
// import SectionOne from "./components/homepage/sectionOne";
// import SecondSession from "./components/secondSession/secondSession";
function App() {
  return (
    <div className="App">
      <HomePage />

      <FirstSession />
      {/* <SecondSession /> */}
    </div>
  );
}

export default App;
