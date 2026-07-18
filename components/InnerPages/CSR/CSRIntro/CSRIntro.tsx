import styles from "./CSRIntro.module.css";

export default function CSRIntro() {
  return (
    <section className={`${styles.introSection} section-anim`}>
      <div className={styles.introInner}>
        <h2>Corporate Social Responsibility (CSR) at HECS</h2>
        <p>
          At HECS, we believe progress is meaningful only when it uplifts communities
          and safeguards the environment. Beyond business, our CSR initiatives are
          designed to make a lasting impact where it matters most - safe water,
          education and environmental awareness.
        </p>
      </div>
    </section>
  );
}