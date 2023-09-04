import style from "./navbar.module.css";
import headerLogo from "../images/header1-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Navbar() {
  const [state, updateState] = useState(false);

  function displayMenuHandler() {
    updateState(false);
  }

  function removeMenuHandler() {
    updateState(true);
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.01) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.header}>
      <div
        className={`${style.container} ${scrolled ? style.scrolled : style}`}
      >
        <div className={style.headerLogo}>
          <img src={headerLogo} alt="headerLogo" />
        </div>
        <div className={style.navbar}>
          <ul>
            <li style={{ marginLeft: "-30px", color: "rgb(177, 142, 67)" }}>
              HOME{" "}
              <span style={{ color: "white" }}>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li>
              ABOUT{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li>
              MENU{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li>
              PAGES{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li>
              BLOG{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li>
              CONTACT{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>

          </ul>
        </div>
        <div className={style.booking}>
          <p> Connect Now </p>

          <i onClick={displayMenuHandler}>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </div>
      </div>

      <div
        className={`${style.mobileNavbar} ${
          state === false ? style.active : style
        }`}
      >
        <div className={style.logo}>
          <img src={headerLogo} alt="sj" />
          <p onClick={removeMenuHandler}>
            <FontAwesomeIcon icon={faXmark} />
          </p>
        </div>
        <ul>
          <li style={{ color: "rgb(177, 142, 67)" }}>
            HOME <span> + </span>
          </li>
          <li>ABOUT </li>
          <li>
            MENU <span> + </span>
          </li>
          <li>
            PAGES <span> + </span>
          </li>
          <li>
            BLOG <span> + </span>
          </li>
          <li>CONTACT</li>
        </ul>

        <div className={style.callNow}>
          <div className={style.phone}>
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className={style.number}>
            <p> Call Now</p>
            <p> +990-384-2290 </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
