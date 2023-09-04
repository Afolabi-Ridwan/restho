import style from "./firstSession.module.css";
import firstImage from "../images/sub-title-vec.svg";
import secondImage from "./images/h1-intro-left-img.png";
import thirdImage from "./images/h1-intro-right-img.png";
import fourthImage from "./images/mission.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faM, faMessage } from "@fortawesome/free-solid-svg-icons";
import fifthImage from "./images/h1-intro-author.png";

function FirstSession() {
  return (
    <div className={style.firstSession}>
      <div className={style.header}>
        <p>
          {" "}
          <img src={firstImage} alt="as" /> <span>Introduction of Restho </span>
          <img src={firstImage} alt="as" />
        </p>

        <h1> We Are Experienced Resturant. </h1>
      </div>

      <div className={style.body}>
        <div className={style.flexOne}>
          {" "}
          <img className={style.chefOne} src={secondImage} alt="snb" />{" "}
        </div>

        <div className={style.flexTwo}>
          <div className={style.infoOne}>
            <div className={style.ourGoalBox}>
              <div className={style.ourGoalBoxContainer}>
                <div>
                  <img src={fourthImage} alt="saw" />
                  <div className={style.hr}></div>
                </div>
                <div>
                  <p> Our Mission</p>
                </div>
              </div>
            </div>

            <div className={style.note}>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          {/*  */}

          <div className={style.lists}>
            <div>
              <ul>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Delicious Food.{" "}
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Cost Effective.
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Clean Environment.
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Expert Chef.
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Letraset Sheets.
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Quality Food.
                </li>
              </ul>
            </div>
          </div>

          {/*  */}

          <div className={style.commentTab}>
            <div className={style.container}>
              <div>
                <p>
                  {" "}
                  “Welcome our restaurant! Our Restaurant is the best as like
                  delicious food, nutrition food etc in world-wide.”
                </p>
                <div className={style.hamiltonComment}>
                  <div>
                    <img
                      className={style.hamiltonImg}
                      src={fifthImage}
                      alt="sk"
                    />
                  </div>

                  <div
                    className={style.nameTag}
                    style={{ marginLeft: "12px", marginTop: "-10px" }}
                  >
                    <h3> Mr. Hamilton</h3>

                    <p style={{ marginTop: "-10px", fontSize: "15px" }}>
                      CEO & founder
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img className={style.thirdImage} src={thirdImage} alt="akj" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSession;
