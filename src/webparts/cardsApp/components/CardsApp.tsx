import * as React from "react";
import styles from "./CardsApp.module.scss";

import Crm from "./Crm";
import Tcrm from "./Tcrm";
import Tms from "./Tms";
import { ICardsAppProps } from "./ICardsAppProps";

const CardsApp: React.FC<ICardsAppProps> = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.row}>
        <Tcrm />
      </div>
      <div className={styles.row}>
        <Crm
          description={props.description}
          isDarkTheme={props.isDarkTheme}
          environmentMessage={props.environmentMessage}
          hasTeamsContext={props.hasTeamsContext}
          userDisplayName={props.userDisplayName}
          context={props.context}
        />
      </div>
      <div className={styles.row}>
        <Tms />
      </div>
    </div>
  );
};

export default CardsApp;
