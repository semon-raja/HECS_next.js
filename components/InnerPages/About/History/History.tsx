import Badge from "@/components/UI/Badge/Badge";
import styles from "./History.module.css";

export default function History() {
  return (
    <section className={`${styles.historySection} section-anim`}>

      <div className={styles.historyInner}>

        <div className={styles.historyText}>

          <Badge variant="tag">Who we are</Badge>

          <h2>Our History</h2>

          <p>
            Founded in 1997 by Dr. JR Moses, Enviro Care Systems has become a leader in environmental management, proudly celebrating 27 years of dedicated service.
          </p>

          <p>
            What started as a vision to transform environmental practices with innovative solutions has evolved into a comprehensive suite of services and products that showcase our unwavering commitment to sustainability and excellence.
          </p>

        </div>

        <div className={styles.historyImageWrap}>
          <img
            src="/about_pg_imgs/office-hds.jpeg"
            alt="HECS Office"
          />
        </div>

      </div>

    </section>
  );
}