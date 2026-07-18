import styles from "./CSRFocusSection.module.css";

type CSRFocusSectionProps = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function CSRFocusSection({ title, body, image, alt }: CSRFocusSectionProps) {
  return (
    <section className={`${styles.focusSection} section-anim`}>
      <div className={styles.focusContainer}>
        <div className={styles.focusText}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

        <div className={styles.focusImageCard}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}