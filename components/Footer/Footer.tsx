import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>

      <div className={styles.footerTop}>

        {/* Brand column — logo, address, social icons */}
        <div className={styles.footerBrand}>
          <img
            src="/images/footer-logo.jpg"
            alt="HECS"
            className={styles.footerLogo}
          />

          <p>
            A-21, III Phase, Behind Lions Club School,
            Thiru Vi Ka Industrial Estate,
            Guindy, Chennai – 600032,
            Tamil Nadu, India.
          </p>

          <div className={styles.footerSocials}>
            <a href="#" className={styles.socialIconWrap}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className={styles.socialIconWrap}>
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className={styles.socialIconWrap}>
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="#" className={styles.socialIconWrap}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Main Menu column */}
        <div className={styles.footerCol}>
          <h4>Main Menu</h4>

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/career">Careers</Link>
        </div>

        {/* Services column */}
        <div className={styles.footerCol}>
          <h4>Services</h4>

          <a href="#">Turnkey Solutions</a>
          <a href="#">Laboratory Services</a>
          <a href="#">Consultancy Services</a>
          <a href="#">Operation and Maintenance</a>
          <a href="#">Education &amp; Training</a>
          <a href="#">BI Marketing and Services</a>
        </div>

        {/* Resources column */}
        <div className={styles.footerCol}>
          <h4>Resources</h4>

          <a href="#">News &amp; Events</a>
          <a href="#">Blogs</a>
        </div>

        {/* HECS Groups column */}
        <div className={styles.footerCol}>
          <h4>HECS Groups</h4>

          <a href="#">HECS</a>
          <a href="#">Purity Portal</a>
          <a href="#">BI Group</a>
          <a href="#">HECS PSTP</a>
        </div>

      </div>

      {/* Copyright bar */}
      <div className={styles.footerBottom}>
        <p>
          © 2026 Hubert Enviro Care Systems Ltd. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
