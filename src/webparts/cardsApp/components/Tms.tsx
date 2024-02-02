import * as React from "react";
import styles from "./CardsApp.module.scss";

const Tms = () => {
  const handleClick = () => {
    window.open(
      "https://quadra1.sharepoint.com/sites/spdev/TMS/SitePages/Home.aspx",
      "_blank"
    );
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.column1}>
          <div>
            <img src={require("../assets/tms.svg")} alt="TMS logo" />
          </div>
          <div>
            <p className={styles.heading}>TMS</p>
            <p className={styles.text}>Travel management system</p>
            <button type="button" className={styles.btn} onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className={styles.column2}>
          <img
            src={require("../assets/travel.svg")}
            alt="Traveling by plane to any destination"
          />
        </div>
      </div>
    </>
  );
};

export default Tms;
