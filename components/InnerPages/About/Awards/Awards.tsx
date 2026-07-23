import styles from "./Awards.module.css";
import PageHeader from "../PageHeader";

const awardsData = [
  { text: "Fastest Growing Water Treatment Company TN Leadership Awards 2024" },
  { text: "Best Performer 2024 by Supreme Piping Solutions" },
  { text: "Best Water Company (Pvt Sector) Make in India" },
  { text: "Safety Award - Equinix" },
  { text: "Presence in 5+ Countries" }
];

export default function Awards() {
  return (
    <>
      <PageHeader />
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Awards & Accolades</h2>
          <div className={styles.carousel}>
            <div className={styles.track}>
              {[...awardsData, ...awardsData].map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.iconWrap}>
                    <img src="/awards/output-onlinegiftools.gif" alt="Trophy" />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
