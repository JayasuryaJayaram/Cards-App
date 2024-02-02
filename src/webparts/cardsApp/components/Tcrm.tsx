import * as React from "react";
import styles from "./CardsApp.module.scss";

const Tcrm = () => {
  const handleClick = () => {
    window.open("https://quadra1.sharepoint.com/sites/TechCRM#/%22", "_blank");
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.column1}>
          <div>
            <img src={require("../assets/tcrm.svg")} alt="TCRM logo" />
          </div>
          <div>
            <p className={styles.heading}>Tech CRM</p>
            <p className={styles.text}>Log your customer activities here</p>
            <button type="button" className={styles.btn} onClick={handleClick}>
              Open
            </button>
          </div>
        </div>
        <div className={styles.column2}>
          <img
            src={require("../assets/dataSecurity.svg")}
            alt="Data security for electronic documents"
          />
        </div>
      </div>
    </>
  );
};

export default Tcrm;
