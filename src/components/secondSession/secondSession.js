import style from "./secondSession.module.css";
import firstImage from "../images/sub-title-vec.svg";
import Tabs from "./tabs";
import SliderComponent from "./imageSlider";
function SecondSession() {
  return (
    <div className={style.secondSession}>
      <div className={style.header}>
        <p>
          {" "}
          <img src={firstImage} alt="as" /> <span>Introduction of Restho </span>
          <img src={firstImage} alt="as" />
        </p>

        <h1> Restho New Item List</h1>
      </div>

      <Tabs />

      <SliderComponent />
    </div>
  );
}

export default SecondSession;
