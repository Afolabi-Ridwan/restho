import style from "./fourthSession.module.css";
import secondImage from "../images/sub-title-vec.svg";
import firstImage from "./images/dot.svg";
import thirdImage from "./images/—Pngtree—horn flower european style european_3854958.png";

function FourthSession() {
  const info = [
    {
      header: "Welcome to Restho",
      header2: " Indian Menu",
      mealList: [
        {
          listNo: "01",
          header: "Paneer Butter",
          amount: "$10",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
        {
          listNo: "02",
          header: "Veg Biriyani",
          amount: "$15",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "03",
          header: "Fried Rice",
          amount: "$22",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "04",
          header: "Indian Sambar",
          amount: "$18",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
        {
          listNo: "05",
          header: "Indian Rasam",
          amount: "$10",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "06",
          header: "Chichen Tikka",
          amount: "$18",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "07",
          header: "Vegetarian Burger",
          amount: "$18",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
      ],

      nb: "N.B: All food are available in restauarnt & don’t waste your food.",
      address: "Address: Mirpur DOHS, House No-167/170, Avenue-01.",
    },

    {
      header: "Welcome to Restho",
      header2: " Italian Menu",
      mealList: [
        {
          listNo: "01",
          header: "Grey Butter",
          amount: "$10",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
        {
          listNo: "02",
          header: "Sauerkraut",
          amount: "$12",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "03",
          header: "Salt Beef",
          amount: "$25",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "04",
          header: "Italian Sambar",
          amount: "$18",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
        {
          listNo: "05",
          header: "Italian Rasam",
          amount: "$10",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "06",
          header: "Chichen Tikka",
          amount: "$18",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },

        {
          listNo: "07",
          header: "Barley Soup",
          amount: "$20",
          note: "To much delicious food in our restaurant.Visit us & taste it early.",
        },
      ],

      nb: "N.B: All food are available in restauarnt & don’t waste your food.",
      address: "Address: Mirpur DOHS, House No-167/170, Avenue-01.",
    },
  ];

  return (
    <div className={style.fourthSession}>
      <div className={`${style.header} ${style.topHeader}  `}>
        <p>
          {" "}
          <img src={secondImage} alt="as" />{" "}
          <span style={{ fontSize: "17px" }}> Menu List </span>
          <img src={secondImage} alt="as" />
        </p>

        <h1 style={{ fontSize: "40px" }}> Our Menu List</h1>
      </div>
      <div className={style.container}>
        {info.map((eachInfo) => (
          <div className={style.eachTab}>
            <div className={style.topSideIcons}>
              <img
                className={`${style.sideIcons} ${style.leftTopSideIcons}  `}
                src={thirdImage}
                alt="kjsf"
              />
              <img
                className={`${style.sideIcons} ${style.rightTopSideIcons}  `}
                src={thirdImage}
                alt="kjsf"
              />
            </div>
            <div className={style.header}>
              <p>
                {" "}
                <img src={secondImage} alt="as" />{" "}
                <span> {eachInfo.header} </span>
                <img src={secondImage} alt="as" />
              </p>

              <h1> {eachInfo.header2}</h1>
            </div>
            <div>
              {eachInfo.mealList.map((mealInfo) => (
                <div>
                  <div className={style.mealTab}>
                    <p className={style.listNo}> {mealInfo.listNo}</p>

                    <div className={style.mealPrice}>
                      <div className={style.topInfo}>
                        <p> {mealInfo.header}</p>
                        <img src={firstImage} className={style.hr} alt="dhkf" />
                        <p> {mealInfo.amount}</p>
                      </div>

                      <div>
                        <div className={style.bottomInfo}> {mealInfo.note}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={style.nb}>
              {" "}
              <span>{eachInfo.nb.slice(0, 4)} </span> {eachInfo.nb.slice(4)}
            </p>
            <p className={style.address}> {eachInfo.address}</p>
            <div className={style.bottomSideIcons}>
              <img
                className={`${style.sideIcons} ${style.leftBottomSideIcons}  `}
                src={thirdImage}
                alt="kjsf"
              />
              <img
                className={`${style.sideIcons} ${style.rightBottomSideIcons}  `}
                src={thirdImage}
                alt="kjsf"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthSession;
