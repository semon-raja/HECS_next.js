import Badge from "@/components/UI/Badge/Badge";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <>
      <section className={styles.aboutHero}>

        <div className={styles.aboutHeroInner}>

          <div className={styles.newsBadge}>
            <Badge variant="news-solid">About us</Badge>
          </div>

          <h1>
            Transforming challenges into Sustainable growth
          </h1>

        </div>


      </section>

      <div className={styles.aboutGalleryWrap}>
        <img
          src="/about_pg_imgs/workspace-1.jpeg"
          alt="HECS Workspace"
          className={styles.aboutSingleImg}
        />
      </div>

       {/* Follow Us bar — sits at the bottom of the green hero section */}
        <div className={styles.followUsBar}>
          Follow Us:
          <a href="#" className={styles.socialBox}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialBox}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialBox}>
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className={styles.socialBox}>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
    </>
  );
}