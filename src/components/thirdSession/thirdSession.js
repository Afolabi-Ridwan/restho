import style from "./thirdSession.module.css";
// import firstImage from "./images/populer1.png";
import secondImage from "../images/sub-title-vec.svg";
import ThirdSessionTabs from "./thirdSessionTabs";

function ThirdSession() {
  return (
    <div className={style.thirdSession}>
      <div className={style.header}>
        <p>
          {" "}
          <img src={secondImage} alt="as" /> <span> Our Popular Item </span>
          <img src={secondImage} alt="as" />
        </p>

        <h1> Restho Popular Item List</h1>
      </div>

      <ThirdSessionTabs />
    </div>
  );
}

export default ThirdSession;
