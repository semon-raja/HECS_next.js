"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  navClass?: string;
}
const navClassMap: Record<string, string> = {
  "blur": styles.blur,
};

export default function Navbar({ navClass = "" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openThirdDropdown, setOpenThirdDropdown] = useState<string | null>(null);

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
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
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
              <Link href="/about/board-of-directors" onClick={() => setMenuOpen(false)}>Board of Directors</Link>
              <Link href="/about/accreditations" onClick={() => setMenuOpen(false)}>Accreditations</Link>
              <Link href="/about/awards-and-accolades" onClick={() => setMenuOpen(false)}>Awards and Accolades</Link>
            </div>
          </li>

          {/* Products & Services dropdown */}
          <li className={`${styles.navItem} ${styles.dropdown}${openDropdown === "products" ? " " + styles.mobileOpen : ""}`}>
            <div className={styles.dropdownRow}>
              <Link href="/product" onClick={() => setMenuOpen(false)}>
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

            <div
                className={`${styles.megaDropdown}${
                  openDropdown === "products" ? " " + styles.open : ""
                }`}
             >
                <div
                  className={styles.subDropdown}
                  onMouseEnter={() => setOpenSubDropdown("turnkey")}
                  onMouseLeave={() => setOpenSubDropdown(null)}
                >
                  <div className={styles.dropdownItem}>
                    <Link
                      href="/product/turnkey-solutions"
                      onClick={() => setMenuOpen(false)}
                    >
                      Turnkey Solutions
                    </Link>

                    <i className="fa-solid fa-chevron-down"></i>
                  </div>

                  <div
                    className={`${styles.subMenu} ${
                      openSubDropdown === "turnkey" ? styles.open : ""
                    }`}
                  >
                    <div
                      className={styles.thirdDropdown}
                      onMouseEnter={() => setOpenThirdDropdown("water")}
                      onMouseLeave={() => setOpenThirdDropdown(null)}
                    >
                      <div className={styles.dropdownItem}>
                        <Link href="#">Water Treatment Plant</Link>

                        <i className="fa-solid fa-chevron-down"></i>
                      </div>

                      <div
                        className={`${styles.thirdMenu} ${
                          openThirdDropdown === "water" ? styles.open : ""
                        }`}
                      >
                        <Link href="#">Drinking Water Treatment Plant</Link>

                        <Link href="#">High Purity Water Treatment Plant</Link>

                        <Link href="#">Industrial Water Treatment Plant</Link>

                        <Link href="#">Desalination Plant Solutions</Link>
                      </div>
                    </div>
                    <div
                      className={styles.thirdDropdown}
                      onMouseEnter={() => setOpenThirdDropdown("sewage")}
                      onMouseLeave={() => setOpenThirdDropdown(null)}
                    >
                      <div className={styles.dropdownItem}>
                        <Link href="#">Sewage Recycle Plant</Link>

                        <i className="fa-solid fa-chevron-down"></i>
                      </div>

                      <div
                        className={`${styles.thirdMenu} ${
                          openThirdDropdown === "sewage" ? styles.open : ""
                        }`}
                      >
                        <Link href="#">Activated Sludge Process (ASP)</Link>

                        <Link href="#">Sequential Batch Reactor (SBR)</Link>

                        <Link href="#">Membrane Bioreactor (MBR)</Link>

                        <Link href="#">Moving Bed Biofilm Reactor (MBBR)</Link>
                      </div>
                    </div>
                    <Link href="#">Effluent Treatment Plant &amp; ZLD</Link>
                    <div
                      className={styles.thirdDropdown}
                      onMouseEnter={() => setOpenThirdDropdown("air")}
                      onMouseLeave={() => setOpenThirdDropdown(null)}
                    >
                      <div className={styles.dropdownItem}>
                        <Link href="#">Air Pollution Control</Link>

                        <i className="fa-solid fa-chevron-down"></i>
                      </div>

                      <div
                        className={`${styles.thirdMenu} ${
                          openThirdDropdown === "air" ? styles.open : ""
                        }`}
                      >
                        <Link href="#">Scrubber</Link>
                      </div>
                    </div>
                    <div
                      className={styles.thirdDropdown}
                      onMouseEnter={() => setOpenThirdDropdown("solid")}
                      onMouseLeave={() => setOpenThirdDropdown(null)}
                    >
                      <div className={styles.dropdownItem}>
                        <Link href="#">Solid Waste Management</Link>

                        <i className="fa-solid fa-chevron-down"></i>
                      </div>

                      <div
                        className={`${styles.thirdMenu} ${
                          openThirdDropdown === "solid" ? styles.open : ""
                        }`}
                      >
                        <Link href="#">Sludge Management</Link>

                        <Link href="#">Waste to Energy</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={styles.subDropdown}
                  onMouseEnter={() => setOpenSubDropdown("lab")}
                  onMouseLeave={() => setOpenSubDropdown(null)}
                >
                  <div className={styles.dropdownItem}>
                    <Link
                      href="/product/laboratory-services"
                      onClick={() => setMenuOpen(false)}
                    >
                      Laboratory Services
                    </Link>

                    <i className="fa-solid fa-chevron-down"></i>
                    </div>

                  <div
                    className={`${styles.subMenu} ${
                      openSubDropdown === "lab" ? styles.open : ""
                    }`}
                  >
                    <Link href="#">Environmental Testing</Link>
                    <Link href="#">Water Testing</Link>
                    <Link href="#">Food Testing</Link>
                    <Link href="#">Pharmaceutical Testing</Link>
                    <Link href="#">Purity Portal</Link>
                    <Link href="#">Research & Development</Link>
                    <Link href="#">Education & Training Division</Link>
                  </div>
                </div>

                <div className={styles.dropdownItem}>
                  <Link href="/product/consultancy-services" onClick={() => setMenuOpen(false)}>
                    Consultancy Services
                  </Link>
                </div>

                <div
                  className={styles.subDropdown}
                  onMouseEnter={() => setOpenSubDropdown("operation")}
                  onMouseLeave={() => setOpenSubDropdown(null)}
                >
                  <div className={styles.dropdownItem}>
                    <Link
                      href="/product/operation-and-maintenance"
                      onClick={() => setMenuOpen(false)}
                    >
                      Operation and Maintenance
                    </Link>

                    <i className="fa-solid fa-chevron-down"></i>
                  </div>

                  <div
                    className={`${styles.subMenu} ${
                      openSubDropdown === "operation" ? styles.open : ""
                    }`}
                  >
                    <Link href="#">Chemicals</Link>
                    <Link href="#">Spares and Consumables</Link>
                  </div>
                </div>

                <div className={styles.dropdownItem}>
                  <Link href="/product/packaged-sewage-treatment-plants" onClick={() => setMenuOpen(false)}>
                    Packaged Sewage Treatment Plants
                  </Link>
                </div>

                <div className={styles.dropdownItem}>
                  <Link href="/product/solar-energy-solutions" onClick={() => setMenuOpen(false)}>
                    Solar Energy Solutions
                  </Link>
                </div>

                <div className={styles.dropdownItem}>
                  <Link href="/product/bi-marketing-and-services" onClick={() => setMenuOpen(false)}>
                    BI Marketing and Services
                  </Link>
                </div>
            </div>
          </li>

          <li>
            <Link href="/career" onClick={() => setMenuOpen(false)}>Careers</Link>
          </li>

          {/* Resources dropdown */}
          <li className={`${styles.navItem} ${styles.dropdown}${openDropdown === "resources" ? " " + styles.mobileOpen : ""}`}>
            <div className={styles.dropdownRow}>
              <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
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
            <Link href="/csr" onClick={() => setMenuOpen(false)}>CSR</Link>
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
