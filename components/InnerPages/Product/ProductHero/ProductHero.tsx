import Badge from "@/components/UI/Badge/Badge";
import styles from "./ProductHero.module.css";

export default function ProductHero() {
  return (
    <section className={styles.productsIntro}>
      <div className={styles.productsIntroInner}>

        <div className={styles.productsBadgeWrap}>
          <Badge variant="tag">What we offer</Badge>
        </div>

        <h2>Explore Our Products &amp; Services</h2>

        <h3>Engineering a Greener Tomorrow</h3>

      </div>
    </section>
  );
}
