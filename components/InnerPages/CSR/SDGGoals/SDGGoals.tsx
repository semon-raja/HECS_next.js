import { sdgItems } from "../../../../data/data";
import styles from "./SDGGoals.module.css";

export default function SDGGoals() {
  return (
    <section className={`${styles.sdgSection} section-anim`}>
      <div className={styles.sdgContainer}>
        <h2>Our Contribution to the UN Sustainable Development Goals</h2>

        <div className={styles.sdgGrid}>
          {sdgItems.map((item) => (
            <article className={styles.sdgCard} key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}