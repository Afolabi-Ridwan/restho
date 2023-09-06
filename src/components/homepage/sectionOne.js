import style from "./sectionOne.module.css";
import MiddleText from "./middleText";
import firstImage from "../images/banner-img-4.png";
import secondImage from "../images/banner-img-3.png";
import unionRight from "../images/union-right.svg";
import unionLeft from "../images/union-left.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faUtensils } from "@fortawesome/free-solid-svg-icons";

function SectionOne() {
  return (
    <div className={style.sectionOne}>
      <div className={style.container}>
        <div className={style.leftImageRoller}>
          <img className={style.unionLeft} src={unionLeft} alt="js" />
          <img className={style.leftImage} src={secondImage} alt="kls" />
        </div>
        <div className={style.middleText}>
          <MiddleText />
        </div>
        <div className={style.rightImageRoller}>
          <img className={style.rightImage} src={firstImage} alt="kls" />
          <img className={style.unionRight} src={unionRight} alt="kls" />
        </div>
      </div>

      <div className={style.imageContainer}>
        <div className={style.leftImageRoller}>
          <img className={style.unionLeft} src={unionLeft} alt="js" />
          <img className={style.leftImage} src={secondImage} alt="kls" />
        </div>

        <div className={style.rightImageRoller}>
          <img className={style.rightImage} src={firstImage} alt="kls" />
          <img className={style.unionRight} src={unionRight} alt="kls" />
        </div>
      </div>

      <FontAwesomeIcon className={style.utensilsIcon} icon={faUtensils} />
      <FontAwesomeIcon className={style.bowlIcon} icon={faBowlFood} />

      <div className={style.socialHandle}>
        <div></div>
        <div>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Skype</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
