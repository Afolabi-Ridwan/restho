import "./App.css";
import HomePage from "./components/homepage/homepage";
import FirstSession from "./components/firstSession/firstSession";
// import SectionOne from "./components/homepage/sectionOne";
function App() {
  return (
    <div className="App">
      <HomePage />

      <div className="firstSession">
        <FirstSession />
      </div>
    </div>
  );
}

export default App;
