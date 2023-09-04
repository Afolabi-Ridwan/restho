import style from "./secondSession.module.css";
import firstImage from "../images/sub-title-vec.svg";

function SecondSession() {
  return (
    <div className={style.secondSession}>
      <div className={style.header}>
        <p>
          {" "}
          <span>
            <img src={firstImage} alt="jnsd" />
          </span>{" "}
          Our New Item{" "}
          <span>
            <img src={firstImage} alt="jnsd" />
          </span>
        </p>

        <h1> Restho New Item List</h1>
      </div>

      <div className={style.grid}>
        <div className={style.tab}>
          <p> Special Offer</p>
        </div>
        <div className={style.tab}></div>
        <div className={style.tab}></div>
      </div>
    </div>
  );
}

export default SecondSession;
