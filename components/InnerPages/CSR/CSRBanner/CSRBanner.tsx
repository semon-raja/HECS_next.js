import styles from "./CSRBanner.module.css";

export default function CSRBanner() {
  return (
    <section className={styles.bannerHero}>
      <img
        src="/csr_img/csr-banner.jpeg"
        alt="Corporate Social Responsibility"
        className={styles.bannerImg}
      />
    </section>
  );
}