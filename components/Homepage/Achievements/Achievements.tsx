"use client";
import { achievements } from "@/data/achievements";
import CountUp from "react-countup";
import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <section className={styles.achievementsSection}>
      <h2>Achievements</h2>

      <div className={styles.achievementsGrid}>
        <div className={styles.achievementsRow}>
          {achievements.slice(0, 4).map((item, index) => (
            <div key={index} className={styles.achievementItem}>
              <h3>
                <CountUp
                  end={item.value}
                  duration={3}
                  enableScrollSpy
                />
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.achievementsRow}>
          {achievements.slice(4).map((item, index) => (
            <div key={index} className={styles.achievementItem}>
              <h3>
                {item.value}
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
