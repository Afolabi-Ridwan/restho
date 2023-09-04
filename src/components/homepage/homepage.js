import style from "./homepage.module.css";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SectionOne from "./sectionOne";

function HomePage() {
  return (
    <div className={style.homePage}>
      <div className={`${style.header}`}>
        <div className={style.flexOne}>
          <p>
            {" "}
            <span>Opening Hour:</span> 9:00 am to 10:00 pm
          </p>
        </div>

        <div className={style.flexTwo}>
          <p>
            {" "}
            <span className={style.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            info@example.com
          </p>

          <p>
            <span className={style.icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            Road-01, Block-B, West London City
          </p>
        </div>
      </div>
      <Navbar />

      <SectionOne />
    </div>
  );
}

export default HomePage;
