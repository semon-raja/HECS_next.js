import styles from "./TurnkeySolutions.module.css";
import Sidebar from "./Sidebar";

export default function TurnkeyOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bannerWrapper}>
          <img
            src="/turnkeysolutions/banner_img.jpeg"
            alt="Turnkey Solutions Banner"
            className={styles.bannerImage}
          />
        </div>

        <div className={styles.contentWrapper}>
          <Sidebar />

          <div className={styles.content}>
            {/* Heading */}
            <h1 className={styles.contentHeading}>
              Turnkey Solutions for Water &amp; Wastewater
            </h1>

            {/* Main image */}
            <div className={styles.contentImageWrapper}>
              <img
                src="/turnkeysolutions/turnkey-solutions-hecs.webp"
                alt="Turnkey Solutions - HECS Water Treatment"
                className={styles.contentImage}
              />
            </div>

            {/* Paragraph 1 */}
            <p className={styles.contentPara}>
              <strong>Hubert Enviro Care Systems (HECS)</strong> is a global
              leader in turnkey water and wastewater treatment solutions,
              delivering engineered systems for industries, municipal bodies,
              real estate developers, infrastructure companies, utilities, and
              public-sector organizations worldwide. HECS supports critical
              projects where regulatory compliance, operational reliability, and
              long-term performance are non-negotiable.
            </p>

            {/* Paragraph 2 */}
            <p className={styles.contentPara}>
              With nearly three decades of execution experience, HECS has
              evolved from conventional treatment plants to high-recovery water
              recycling, reuse, and{" "}
              <strong>Zero Liquid Discharge (ZLD)</strong> solutions. The
              company designs and delivers{" "}
              <strong>Sewage Treatment Plants</strong>,{" "}
              <strong>Effluent Treatment Plants</strong>,{" "}
              <strong>Water Treatment Plants</strong>, integrated{" "}
              <strong>wastewater treatment plants</strong>, and advanced ZLD
              systems across diverse industries and operating environments.
            </p>

            {/* Proof of Execution */}
            <h2 className={styles.proofHeading}>Proof of Execution</h2>
            <ul className={styles.proofList}>
              <li>
                <strong>2,000+</strong> projects delivered across India, Asia
                &amp; the Middle East
              </li>
              <li>Treatment capacities from a few KLD to 20 MLD</li>
              <li>
                <strong>30+</strong> projects currently under execution
              </li>
              <li>
                Recognised as &ldquo;<strong>Best Water Company 2023</strong>
                &rdquo; &amp; &ldquo;
                <strong>Fastest Growing Water Treatment Company 2024</strong>
                .&rdquo;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}