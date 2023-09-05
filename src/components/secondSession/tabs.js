import style from "./tabs.module.css";
import ImageRotator from "./imageRotator";
import firstImage from "../images/sub-title-vec.svg";

function Tabs() {
  return (
    <div className={style.tabs}>
      {/* <div className={style.grid}> */}
      <div className={`${style.tab} ${style.firstTab}`}>
        <div className={style.offer}>
          <p> Special Offer</p>
          <p> Our new Item has Offer</p>
        </div>

        <div className={style.discount}>
          <p> After Discount </p>
          <p> 20% </p>
        </div>
      </div>

      <div
        className={`${style.tab} ${style.secondTab}`}
        style={{ marginLeft: "30px", marginRight: "30px" }}
      >
        <ImageRotator />
      </div>

      <div className={`${style.tab} ${style.thirdTab}`}>
        <p>
          <img src={firstImage} alt="sf" />
          Reserve
          <img src={firstImage} alt="sf" />
        </p>

        <p> For your private event</p>

        <button> Book Table </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Tabs;
