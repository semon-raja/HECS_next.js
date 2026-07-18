import styles from "./CareerOpenings.module.css";

export default function CareerOpenings() {
  return (
    <section className={styles.careerOpenings}>
      <div className={styles.careerOpeningsInner}>

        <h2>Current Openings</h2>

        <p>
          At HECS, our greatest asset is our personnel driven by a passion for
          delivering innovative environmental solutions. With over 2000
          professionals across the globe, we are committed to delivering
          impactful solutions across borders. Explore exciting career
          opportunities with HECS – check out our current openings and take the
          next step in your journey.
        </p>

        <div className={styles.careerButtons}>
          <a href="#" className={styles.careerBtn}>View Current openings</a>
          <a href="#" className={styles.careerBtn}>Internship</a>
        </div>

        <p className={styles.careerNote}>
          In case there are no suitable current openings for your profile,
          please click here to drop your resume for future openings.
        </p>

        <a href="#" className={styles.careerDropBtn}>Click here</a>

      </div>
    </section>
  );
}
