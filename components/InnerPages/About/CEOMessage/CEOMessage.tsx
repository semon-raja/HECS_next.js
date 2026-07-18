import styles from "./CEOMessage.module.css";

export default function CEOMessage() {
  return (
    <section className={`${styles.ceoSection} section-anim`}>

      <div className={styles.ceoInner}>

        <div className={styles.ceoPhoto}>
          <img
            src="/about_pg_imgs/dr-moses_ceo.jpg"
            alt="Dr. J.R. Moses, CEO of HECS"
          />
        </div>

        <div className={styles.ceoText}>
          <h2>CEO&apos;s Message</h2>

          <p>
            As CEO of HECS, I&apos;m proud to celebrate 27 years of pioneering
            environmental solutions in India. Since our inception, we have
            remained committed to sustainability, innovation, and excellence,
            working to minimize environmental impact and foster sustainable
            practices. Our growth has been driven by strategic investments and
            technological advancements expanding our offerings and strengthening
            our portfolio.
          </p>
        </div>

      </div>

    </section>
  );
}