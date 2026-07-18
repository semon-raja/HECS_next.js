"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  navClass?: string;
}

// Map the prop string from Header.tsx to the CSS Module class key.
// Header passes: "" | "move-up" | "hide"
// CSS Module keys: moveUp | hide
const navClassMap: Record<string, string> = {
  "blur": styles.blur,
};

export default function Navbar({ navClass = "" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Build the root <nav> className
  const navClassName = [
    styles.navbar,
    navClass ? navClassMap[navClass] ?? "" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClassName}>

      {/* Logo */}
      <div className={styles.logo}>
        <img src="/images/logo-local.png" alt="HECS Logo" />
      </div>

      {/* Slide-in drawer (desktop: display:contents, mobile: fixed panel) */}
      <div className={`${styles.navPanel}${menuOpen ? " " + styles.open : ""}`}>

        {/* Drawer header — visible only on mobile */}
        <div className={styles.navPanelHeader}>
          <img
            src="/images/logo-local.png"
            alt="HECS Logo"
            className={styles.navPanelLogo}
          />
          <button
            className={styles.navClose}
            onClick={() => setMenuOpen(false)}
            suppressHydrationWarning
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Nav links */}
        <ul className={styles.navLinks}>

          <li>
            <Link href="/">Home</Link>
          </li>

          {/* About dropdown */}
          <li className={`${styles.navItem} ${styles.dropdown}${openDropdown === "about" ? " " + styles.mobileOpen : ""}`}>
            <div className={styles.dropdownRow}>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
              <button
                className={styles.dropdownToggle}
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                suppressHydrationWarning
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>

            <div className={`${styles.megaDropdown}${openDropdown === "about" ? " " + styles.open : ""}`}>
              <a href="#">Board of Directors</a>
              <a href="#">Accreditations</a>
              <a href="#">Awards and Accolades</a>
            </div>
          </li>

          {/* Products & Services dropdown */}
          <li className={`${styles.navItem} ${styles.dropdown}${openDropdown === "products" ? " " + styles.mobileOpen : ""}`}>
            <div className={styles.dropdownRow}>
              <Link href="/product">
                Our Products &amp; Services
              </Link>
              <button
                className={styles.dropdownToggle}
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "products" ? null : "products"
                  )
                }
                suppressHydrationWarning
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>

            <div className={`${styles.megaDropdown}${openDropdown === "products" ? " " + styles.open : ""}`}>
              <a href="#">Turnkey Solutions</a>
              <a href="#">Laboratory Services</a>
              <a href="#">Consultancy Services</a>
              <a href="#">Operation and Maintenance</a>
              <a href="#">Packaged Sewage Treatment Plants</a>
              <a href="#">BI Marketing and Services</a>
            </div>
          </li>

          <li>
            <Link href="/career">Careers</Link>
          </li>

          {/* Resources dropdown */}
          <li className={`${styles.navItem} ${styles.dropdown}${openDropdown === "resources" ? " " + styles.mobileOpen : ""}`}>
            <div className={styles.dropdownRow}>
              <Link href="/resources">Resources</Link>
              <button
                className={styles.dropdownToggle}
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "resources" ? null : "resources"
                  )
                }
                suppressHydrationWarning
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>

            <div className={`${styles.megaDropdown}${openDropdown === "resources" ? " " + styles.open : ""}`}>
              <a href="#">News &amp; Events</a>
              <a href="#">Blog</a>
              <a href="#">Regulations</a>
              <a href="#">Social Media</a>
              <a href="#">HECS Plantation Drive</a>
            </div>
          </li>

          <li>
            <Link href="/csr">CSR</Link>
          </li>

        </ul>
      </div>

      {/* Right cluster: CTA button + hamburger */}
      <div className={styles.navRightCluster}>
        <a href="#" className={styles.navCta}>
          Contact us
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          suppressHydrationWarning
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay — dims the page when the drawer is open on mobile */}
      <div
        className={`${styles.navOverlay}${menuOpen ? " " + styles.open : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

    </nav>
  );
}
