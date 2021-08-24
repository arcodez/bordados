import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles.services}>
      <p className={styles.sub_title_services}>Sencillo y Rapido</p>
      <h2>Empieza en 2 simples pasos</h2>

      <div className={styles.services_cards}>
        <div className={styles.services_card}>
          <div className={styles.card_icon}></div>
          <div className={styles.card_button}></div>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.services_card}>
          <div className={styles.card_icon}></div>
          <div className={styles.card_button}></div>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.services_card}>
          <div className={styles.card_icon}></div>
          <div className={styles.card_button}></div>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.services_card}>
          <div className={styles.card_icon}></div>
          <div className={styles.card_button}></div>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
};
