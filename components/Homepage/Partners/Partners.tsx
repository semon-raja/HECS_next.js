import {
  topPartners,
  bottomPartners,
} from "@/data/partners";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <h2>Proudly serving our clients since 1997</h2>

      {/* Top Row */}
      <div className={styles.partnersCarousel}>
        <div className={`${styles.partnersTrack} ${styles.trackRight}`}>
          {[...topPartners, ...topPartners].map((partner, index) => (
            <div
              key={index}
              className={styles.partnerLogo}
            >
              <img
                src={partner.image}
                alt={partner.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.partnersCarousel}>
        <div className={`${styles.partnersTrack} ${styles.trackLeft}`}>
          {[...bottomPartners, ...bottomPartners].map((partner, index) => (
            <div
              key={index}
              className={styles.partnerLogo}
            >
              <img
                src={partner.image}
                alt={partner.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
