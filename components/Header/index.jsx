import { useEffect } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}><div className={styles.text}>
        
          <h1>Bordados <span>Arcodez</span></h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et culpa possimus unde dicta vel perferendis quasi architecto .
          </p>
    </div>

      <div className={styles.box}>
        <div className={styles.card_container}>
          <div className={styles.card}>Primera parte</div>
          <div className={styles.card}> Segunda Parte</div>
        </div>
      </div>
    </div>
  );
};
